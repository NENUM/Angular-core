import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  // ngOnInit(): void {
  // }//se usa para realizar funciones al momento de cargarse el documento
  heroes: string[] =['Lily', 'Sakura', 'Tae', 'Yugiri', 'Saki', 'Junko', 'Ai'];
  heroeBorrado: string = '';
  borrarHeroe():void {
   this.heroeBorrado = this.heroes.pop() || '';//Se especifica el '' ya que la funcion puede devolver undefined o string, el string prima sobre el undefined
  }
}
