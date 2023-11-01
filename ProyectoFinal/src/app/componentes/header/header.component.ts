import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';
import { SalaComponent } from '../sala/sala.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private controlador:ControladorJuegosService, private router:Router){} //private sala:SalaComponent

  ngOnInit(){
    this.usuarioAutenticado = this.controlador.checkAdminInit()
  }

  usuarioAutenticado = false; // Inicialmente, el usuario no está autenticado

  salir(){
    this.controlador.desloguearse();
    this.router.navigate(["inicio"]);
    this.ngOnInit();
  }

  irsalas(ADMIN:string){
    this.router.navigate(["/sala",ADMIN])
    .then((data) => {
      console.log("d",data);
      //this.sala.ngOnInit();
    }).catch((error)=>{
      console.log(error)
    });


  }
}
