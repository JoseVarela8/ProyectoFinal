import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Juego } from 'src/app/clases/juego';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

import { webSocket } from "rxjs/webSocket";


@Component({
  selector: 'app-salas-admin',
  templateUrl: './salas-admin.component.html',
  styleUrls: ['./salas-admin.component.css']
})
export class SalasAdminComponent {
  SalasActivas : Juego[] = []
  enSala: boolean = false
  linksala: string = ""
  SalaActiva: Juego = new Juego
  subject = webSocket(this.controlador.getip());  //cambiar esto al websocket
  mensajes: string[] = []
  
  constructor(private controlador:ControladorJuegosService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(){

    this.subject.subscribe({
      next: message => {
      this.mensajes.push(JSON.stringify(message))
      }, 
      error: error => {
      console.log(error);
      }
    });

    
    this.linksala = this.route.snapshot.params['link'];
    if(this.linksala != undefined){
      this.enSala = true;
      let variable = this.controlador.getJuego2(this.linksala)
      if (variable != null){
        this.SalaActiva = variable
      }
    } else{
      this.SalasActivas = this.controlador.listarJuegos()
    }
  }

  irsala(link:any){
    this.router.navigate(["/salasadmin",link])
    .then(() => {
      this.ngOnInit();
    });
  }

  empezarJuego(){
    let string = "Admin inicio la sala:" + this.SalaActiva.nombre
    this.subject.next(string);
  }
}
