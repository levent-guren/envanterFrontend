import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GirisComponent } from './giris/giris.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UrunComponent } from './urun/urun.component';

@NgModule({
  declarations: [
    AppComponent,
    GirisComponent,
    AnasayfaComponent,
    UrunComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
