import { Component } from '@angular/core';
import { Propuesta } from 'src/app/clases/propuesta';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-mostrar-propuestas',
  templateUrl: './mostrar-propuestas.component.html',
  styleUrls: ['./mostrar-propuestas.component.css']
})
export class MostrarPropuestasComponent {
  Propuestas: Propuesta[] = []

  constructor(private controlador: ControladorJuegosService){

  }

  ngOnInit(){
    this.Propuestas = this.controlador.listarPropuestas()
  }
}
