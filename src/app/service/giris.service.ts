import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GirisService {
  public token = "";
  public kullaniciAdi = "";
  public roller:string[] = [];

  constructor(
    private http: HttpClient,
  ) {
 
   }
   setToken(token: string) {
    this.token = token;
    const payloadObj = this.parseJwt(token);
    this.kullaniciAdi = payloadObj.kullaniciAdi;
    this.roller =  payloadObj.roller;
   }
   parseJwt(token:string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };
  girisYap(email: string, sifre: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/giris', { email, sifre });
  }
}
