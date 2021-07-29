import { Component, Input } from '@angular/core';
//import { Personaje } from '../interfaces/eva.interfaces';
import { EvaService } from '../services/evangelion.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent{
  //@Input()  personajesEva: Personaje[] = [];

  get personajesEva(){
    return this.evaService.personajesEva;
  }

  constructor(private evaService: EvaService){}
}
