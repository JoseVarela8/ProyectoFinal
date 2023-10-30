import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private controlador:ControladorJuegosService, private router:Router){}

  ngOnInit(){
    this.usuarioAutenticado = this.controlador.checkAdminInit()
  }
  usuarioAutenticado = false; // Inicialmente, el usuario no está autenticado

  salir(){
    this.controlador.desloguearse();
    this.router.navigate(["inicio"]);
    this.ngOnInit();
  }
}
