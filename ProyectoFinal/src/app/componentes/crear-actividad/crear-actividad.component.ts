import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent {

  constructor(private controlador:ControladorJuegosService, private router:Router){}

  Actividad(titulo: string, descripcion: string, imagen:string){
    this.controlador.crearActividad(titulo,descripcion,imagen).subscribe(data =>{
      alert(data.mensaje)
    });
    this.router.navigate(["/inicio"])
  }
}
