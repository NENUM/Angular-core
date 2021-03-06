import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { EvangelionModule } from './evangelion/evangelion.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,//Se agrega al modulo principal para unificar todos los modulos
    ContadorModule,
    EvangelionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
