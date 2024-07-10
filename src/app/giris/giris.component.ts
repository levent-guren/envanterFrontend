import { Component } from '@angular/core';
import { GirisService } from '../service/giris.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrl: './giris.component.scss'
})
export class GirisComponent {
  email = '';
  sifre = '';
  hataMesaji = '';
  constructor(
    private girisService: GirisService,
    private router: Router,
  ) {}
  giris() {
   this.girisService.girisYap(this.email, this.sifre).subscribe({
    next: (result) => {
      // login başarılı oldu. Anasayfa'ya gidelim.
      this.router.navigate(['/anasayfa']);
    },
    error: (error) => {
      this.hataMesaji = 'Giriş başarısız. Tekrar deneyiniz.';
      this.sifre = '';
    }
   });
  }
}
