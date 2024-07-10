import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirisComponent } from './giris/giris.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';

const routes: Routes = [
  {path:'', redirectTo:'giris', pathMatch: 'full'},
  {path:'giris', component: GirisComponent},
  {path:'anasayfa', component: AnasayfaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
