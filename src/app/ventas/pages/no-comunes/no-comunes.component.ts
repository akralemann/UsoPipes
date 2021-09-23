import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Alan';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

    // i18nPlural
    clientes: string[] = ['Alan','Pedro','Patricio','Arenita','Bob Esponja']
    clientesMapa = {
      '=0': 'no tenemos ningun cliente esperando.',
      '=1': 'tenemos a un cliente esperando.',
      'other': 'tenemos a # clientes esperando.',
    }


    cambiarCliente(){

      if (this.nombre === "Alan"){

        this.nombre = "Paola";
        this.genero = "femenino";

      } else {
        this.nombre = "Alan";
        this.genero = "masculino";
      }
    }

    borrarCliente(){
      this.clientes.pop();
    }

}
