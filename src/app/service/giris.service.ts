import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GirisService {
  constructor(
    private http: HttpClient,
  ) {
 
   }
  girisYap(email: string, sifre: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/giris', { email, sifre });
  }
}
