import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urun } from '../model/urun';
import { GirisService } from './giris.service';

@Injectable({
  providedIn: 'root'
})
export class UrunService {
  

  constructor(
    private http: HttpClient,
    private girisService: GirisService,  // GirişService'i kullanarak token bilgisini alıyoruz
  ) {}

  getUrunListesi():Observable<Urun[]> {
    const headers = new HttpHeaders(
      {
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+this.girisService.token
      }
    );
    return this.http.get<Urun[]>('http://localhost:8080/urun', { headers } );
  }
  urunSil(uuid: any) {
    const headers = new HttpHeaders(
      {
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+this.girisService.token
      }
    );
   return this.http.delete<any>('http://localhost:8080/urun',  { headers } );
  }
}
