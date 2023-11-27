import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from 'src/app/clases/actividad';
import { Juego } from 'src/app/clases/juego';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

import { webSocket } from "rxjs/webSocket";

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit{
  linksala: string | undefined
  enSala:boolean = false
  SalasActivas : Juego[] = []
  SalaActiva: Juego = new Juego
  Actividades : Actividad[] = []
  empezo: boolean = false
  contador = 0;
  Puntaje: number[] = []
  MayorPuntaje: number = 0;

  subject = webSocket(this.controlador.getip());  //cambiar esto al websocket
  mensajes: string[] = []
  mensajesviejos: string[] = []

  constructor(private controlador:ControladorJuegosService, private router: Router, private route:ActivatedRoute){}

  ingresar(codigo: string) {
    console.log("Entraste a ingresar")
    let nombreSala = this.controlador.getJuego(codigo);
    if (nombreSala) {
      let string = "Usuario entro a la sala:" + nombreSala
      this.subject.next(string);
      this.router.navigate(['sala', nombreSala]);
    } else {
      // Manejo de caso cuando no se encuentra el juego con el código especificado
      alert("Sala no encontrada")
      console.log("Juego no encontrado");
    }
  }

  ngOnInit(){

    this.subject.subscribe({
      next: message => {
      this.mensajes.push(JSON.stringify(message))
      this.mirar()
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
    }
  }

  mirar() {
    if (this.mensajes != this.mensajesviejos) {
      this.onVariableChange();
      this.mensajesviejos = Object.assign({}, this.mensajes);
      return(true)
    } else {
      return(false)
    }
  }

  onVariableChange(){
    let last:any = this.mensajes[this.mensajes.length-1];
    if (last == `{"message":"Admin inicio la sala:${this.SalaActiva.nombre}"}`){
      this.empezo = true
      if (this.SalaActiva.actividades != null){
        this.Actividades = this.controlador.obtenerActividadesPorIds(this.SalaActiva.actividades) 
        let largo = this.Actividades.length
        for (let i = 0; i < largo; i++) {
          this.Puntaje.push(0)
        }
        this.timer(30);
      }
    } else {
      console.log("fallo", last, " es distinto de ",`{"message":"Admin inicio la sala:${this.SalaActiva.nombre}"}` )
    }
  }

  mayorPuntaje(){
    let actGanadoras = []
    let j = this.Puntaje.length
    let MPuntaje = 0
    while (j >= 0){
      if(this.Puntaje[j] > MPuntaje){
        actGanadoras =[]
        actGanadoras.push(this.Actividades[j])
        MPuntaje = this.Puntaje[j]
      } else {
        if (this.Puntaje[j] == MPuntaje){
          actGanadoras.push(this.Actividades[j])
        }
      }
      j = j-1;
    }
    actGanadoras = actGanadoras.reverse()
    if (actGanadoras.length >1){
      let actGanadora =[]
      actGanadora.push (actGanadoras[0])
      return actGanadora
    }
    else{
      return actGanadoras
    }
  }


  votarMegusta(){
    this.timer(30);
    this.Puntaje[this.contador] = this.Puntaje[this.contador] + 1
    this.contador = this.contador + 1
  }

  votarMedaigual(){
    this.timer(30);
    this.contador = this.contador + 1
  }

  votarNoMegusta(){
    this.timer(30);
    this.Puntaje[this.contador] = this.Puntaje[this.contador] - 1
    this.contador = this.contador + 1
  }


  display: any;

  timer(segundos: number) {
    // let minute = 1;
    let seconds: number =  segundos; //minute * 60;
    let textSec: any = "0";
    let statSec: number = segundos;

    //const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = statSec;          //"0" + 
      } else textSec = statSec;

      this.display = `${textSec}`; //${prefix}${Math.floor(seconds / 60)}:

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
        if (this.contador < this.Actividades.length){
          this.votarMedaigual();
        }
      }
    }, 1000);
  }
}
