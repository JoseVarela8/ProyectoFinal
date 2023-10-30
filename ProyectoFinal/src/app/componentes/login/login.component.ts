import { Component } from '@angular/core';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private controlador:ControladorJuegosService){}
  /*  
  login(nombre:string, contrasenia:string){
    this.controlador.crearUsuario(nombre,contrasenia)
    console.log(this.controlador.listarUsuario())
  }
  */

  login(usuario: string, contrasenia: string) {
    // Lógica de inicio de sesión aquí...
    let inicioDeSesionExitoso = true
    // Si el inicio de sesión es exitoso, muestra un mensaje en la consola
    if (inicioDeSesionExitoso) {
      console.log('Inicio de sesión exitoso');
    }
  }
}

