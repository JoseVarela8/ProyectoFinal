import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { range } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Actividad } from 'src/app/clases/actividad';
import { Juego } from 'src/app/clases/juego';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

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
  empezo: boolean = true
  contador = 0;
  Puntaje: number[] = []
  MayorPuntaje: number = 0;

  constructor(private controlador:ControladorJuegosService, private router: Router, private route:ActivatedRoute){}

  ingresar(codigo:string){
    let link = this.controlador.getJuego(codigo);
    this.router.navigate(['sala', link])    //cuando haya juegos poner el link
  }

  ngOnInit(){
    this.linksala = this.route.snapshot.params['link'];
    if(this.linksala != undefined){
      this.enSala = true;
      let variable = this.controlador.getJuego2(this.linksala)
      if (variable != null){
        this.SalaActiva = variable
        if (this.SalaActiva.propuesta?.actividades != null){
          this.Actividades = this.SalaActiva.propuesta?.actividades
          let largo = this.Actividades.length
          for (let i = 0; i < largo; i++) {
            this.Puntaje.push(0)
          }
          this.timer(30);
        }
      }
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
    return actGanadoras
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
