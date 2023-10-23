import { Component } from '@angular/core';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private controlador:ControladorJuegosService){}
  
  login(nombre:string, contrasenia:string){
    this.controlador.crearUsuario(nombre,contrasenia)
    console.log(this.controlador.listarUsuario())
  }
}
