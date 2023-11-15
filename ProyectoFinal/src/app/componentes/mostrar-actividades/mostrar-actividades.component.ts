import { Component } from '@angular/core';
import { Actividad } from 'src/app/clases/actividad';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-mostrar-actividades',
  templateUrl: './mostrar-actividades.component.html',
  styleUrls: ['./mostrar-actividades.component.css']
})
export class MostrarActividadesComponent {

  Actividades: Actividad[] = []

  constructor(private controlador: ControladorJuegosService){

  }

  ngOnInit(){
    this.Actividades = this.controlador.listarActividades()
  }
}
