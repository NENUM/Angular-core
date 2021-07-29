import { Component } from '@angular/core';
import { Personaje } from '../interfaces/eva.interfaces';
import { EvaService } from '../services/evangelion.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje={
    nombre:'Shinji Ikari',
    poder: 2000
  }

  constructor(){}
}
