import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirisComponent } from './giris/giris.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { UrunComponent } from './urun/urun.component';

const routes: Routes = [
  {path:'', redirectTo:'giris', pathMatch: 'full'},
  {path:'giris', component: GirisComponent},
  {path:'anasayfa', component: AnasayfaComponent},
  {path:'urunler', component: UrunComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
