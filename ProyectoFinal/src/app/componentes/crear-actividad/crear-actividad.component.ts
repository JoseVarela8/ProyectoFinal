import { Component } from '@angular/core';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent {

  constructor(private controlador:ControladorJuegosService){}

  Actividad(titulo: string, descripcion: string, imagen:string){
    this.controlador.crearActividad(titulo,descripcion,imagen)
    console.log(this.controlador.listarActividades())
  }
}
