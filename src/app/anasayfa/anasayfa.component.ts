import { Component, OnInit } from '@angular/core';
import { GirisService } from '../service/giris.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrl: './anasayfa.component.scss'
})
export class AnasayfaComponent implements OnInit {
  kullaniciAdi = "";

  constructor(
    private girisService: GirisService,
    private router: Router,  // Router servisi, uygulama içerisindeki yolları yönlendirmek için kullanılır.
  ) { }
  ngOnInit(): void {
    // bu metod component ekranda gösterilmeden hemen önce çalıştırılır.
    this.kullaniciAdi = this.girisService.kullaniciAdi;
  }
  urunlereGit() {
    // Urunler sayfasına yönlendirme
   this.router.navigate(['/urunler']);
  }
}
