import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/eva.interfaces';

@Injectable()
export class EvaService{

    private _personajesEva: Personaje[]=[
        {
          nombre: 'Dr Kagi',
          poder: 480
        },
        {
          nombre: 'Joven Kaji',
          poder: 700
        }
    ];

    get personajesEva(): Personaje[]{
        return [...this._personajesEva];
    }

    constructor(){}

    agregarPersonaje(data: Personaje){
        this._personajesEva.push(data)
    }
}