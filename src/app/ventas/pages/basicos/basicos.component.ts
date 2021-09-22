import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'alan';
  nombreUpper: string = 'ALAN';
  nombreCompleto: string = 'aLaN kRaleManN';

  fecha: Date = new Date(); // Fecha actual
  
}
