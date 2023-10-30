import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private controlador:ControladorJuegosService, private router:Router){}
  /*  
  login(nombre:string, contrasenia:string){
    this.controlador.crearUsuario(nombre,contrasenia)
    console.log(this.controlador.listarUsuario())
  }
  */

  login(usuario: string, contrasenia: string) {

    let check = this.controlador.getUsuario(usuario, contrasenia);
    if (check){
      console.log('Inicio de sesión exitoso');
      this.router.navigate(["inicio"]);
    }
    else{
      console.log("Fallo Login, ese usuario no existe");
    }

  }
}

