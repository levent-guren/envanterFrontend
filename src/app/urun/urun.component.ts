import { Component, OnInit } from '@angular/core';
import { UrunService } from '../service/urun.service';
import { Urun } from '../model/urun';

@Component({
  selector: 'app-urun',
  templateUrl: './urun.component.html',
  styleUrl: './urun.component.scss'
})
export class UrunComponent implements OnInit {
  urunler: Urun[] = [];
  seciliUrun: any;

  constructor(
    private urunService: UrunService
  ) {}
  ngOnInit(): void {
    // Burada ürün bilgileri, resimleri ve diğer bilgiler yüklenecek.
    this.urunService.getUrunListesi().subscribe({
      next: (sonuc) => {
        // Ürünler yükleniyor...
        this.urunler = sonuc;
      },
      error: (error) => {
        // Bir hata oluştu...
      }
    });
  }
  urunSec(urun: Urun) {
    this.seciliUrun = urun;
  }
  urunSil() {
    if (this.seciliUrun) {
      this.urunService.urunSil(this.seciliUrun.uuid).subscribe({
        next: () => {
          // Ürün silindi...
          this.urunler = this.urunler.filter((u) => u.uuid!== this.seciliUrun.uuid);
          this.seciliUrun = null;
        },
        error: (error) => {
          // Bir hata oluştu...
        }
      });
    }
  }
}
