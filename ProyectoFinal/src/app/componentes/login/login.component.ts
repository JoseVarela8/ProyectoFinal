import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';
import {AuthService} from "../../servicios/auth/auth.service";
import {Sha512Service} from "../../servicios/cripto/sha512.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private controlador:ControladorJuegosService, private router:Router,private  auth:AuthService, private sha:Sha512Service, private  cookie:CookieService){}
  /*
  login(nombre:string, contrasenia:string){
    this.controlador.crearUsuario(nombre,contrasenia)
    console.log(this.controlador.listarUsuario())
  }
  */

  login(usuario: string, contrasenia: string) {
    this.auth.obtenerTokenAdmin(usuario,contrasenia).subscribe(data =>{
      this.cookie.set(this.sha.EncryptSHA512("token"), data.token);  //this.sha.EncryptSHA512(data.token)
      alert(`Token: ${data.token}`);
      this.controlador.logeado()
    });
    /*
    let check = this.controlador.getUsuario(usuario, contrasenia);
    if (check){
      console.log('Inicio de sesión exitoso');
      this.router.navigate(["inicio"]);
    }
    else{
      console.log("Fallo Login, ese usuario no existe");
    }*/

  }
}

