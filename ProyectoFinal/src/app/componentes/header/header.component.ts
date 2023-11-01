import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';
import { SalaComponent } from '../sala/sala.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private controlador:ControladorJuegosService, private router:Router, private route:ActivatedRoute){} 

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
