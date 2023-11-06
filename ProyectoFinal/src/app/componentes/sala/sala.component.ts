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
        }
      }
    }
  }

  votarMegusta(){
    this.Puntaje[this.contador] = this.Puntaje[this.contador] + 1
    this.contador = this.contador + 1
  }

  votarMedaigual(){
    this.contador = this.contador + 1
  }

  votarNoMegusta(){
    this.Puntaje[this.contador] = this.Puntaje[this.contador] - 1
    this.contador = this.contador + 1
  }
}
