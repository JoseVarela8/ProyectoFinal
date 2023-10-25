import { Component } from '@angular/core';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private controlador:ControladorJuegosService){}
  
  register(nombre:string, contrasenia:string){
    this.controlador.crearUsuario(nombre,contrasenia)
    console.log(this.controlador.listarUsuario())
  }
}
