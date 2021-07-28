import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[//Componentes que contiene le modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//Elementos que son visibles por fuera del modulo
        ListadoComponent
    ],
    imports:[//Se ubican unicamente modulos
        CommonModule//Es el que se encarga de importar elementos especiales de angular como *ngFor, *ngIf etc
    ]
})

export class HeroesModule{

}