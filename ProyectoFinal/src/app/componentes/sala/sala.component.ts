import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from 'src/app/clases/actividad';
import { Juego } from 'src/app/clases/juego';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  linksala: string | undefined
  enSala: boolean = false
  SalasActivas: Juego[] = []
  SalaActiva: Juego = new Juego
  Actividades: Actividad[] = []
  empezo: boolean = true //Cambiarlo a false, lo puse en true para probar sin websocket
  contador = 0;
  Puntaje: number[] = []
  MayorPuntaje: number = 0;

  constructor(private controlador: ControladorJuegosService, private router: Router, private route: ActivatedRoute) { }

  ingresar(codigo: string) {
    console.log("Entraste a ingresar")
    let nombreSala = this.controlador.getJuego(codigo);
    if (nombreSala) {
      this.router.navigate(['sala', nombreSala]);
    } else {
      // Manejo de caso cuando no se encuentra el juego con el código especificado
      alert("Sala no encontrada")
      console.log("Juego no encontrado");
    }
  }

  ngOnInit() {
    this.linksala = this.route.snapshot.params['link'];
    if (this.linksala != undefined) {
      this.enSala = true;
      let variable = this.controlador.getJuego2(this.linksala)
      if (variable != null) {
        this.SalaActiva = variable
        if (this.SalaActiva.actividades != null) {
          this.Actividades = this.controlador.obtenerActividadesPorIds(this.SalaActiva.actividades)
          let largo = this.Actividades.length
          for (let i = 0; i < largo; i++) {
            this.Puntaje.push(0)
          }
          this.timer(30);
        }
      }
    }
  }

  mayorPuntaje() {
    let actGanadoras = []
    let j = this.Puntaje.length
    let MPuntaje = 0
    while (j >= 0) {
      if (this.Puntaje[j] > MPuntaje) {
        actGanadoras = []
        actGanadoras.push(this.Actividades[j])
        MPuntaje = this.Puntaje[j]
      } else {
        if (this.Puntaje[j] == MPuntaje) {
          actGanadoras.push(this.Actividades[j])
        }
      }
      j = j - 1;
    }
    actGanadoras = actGanadoras.reverse()
    if (actGanadoras.length > 1) {
      let actGanadora = []
      actGanadora.push(actGanadoras[0])
      return actGanadora
    }
    else {
      return actGanadoras
    }
  }


  votarMegusta(idActividad: number | undefined) {
    this.timer(30);
    this.Puntaje[this.contador] = this.Puntaje[this.contador] + 1;
    this.enviarVoto(idActividad, 1); // Llamar a enviarVoto con 1 para Megusta
    this.contador++;
  }

  votarMedaigual(idActividad: number | undefined) {
    this.timer(30);
    this.contador++;
    this.enviarVoto(idActividad, 0); // Llamar a enviarVoto con 0 para Medaigual
  }

  votarNoMegusta(idActividad: number | undefined) {
    this.timer(30);
    this.Puntaje[this.contador] = this.Puntaje[this.contador] - 1
    this.enviarVoto(idActividad,-1); // Llamar a enviarVoto con -1 para NoMegusta
    this.contador++;
  }


  display: any;

  timer(segundos: number) {
    // let minute = 1;
    let seconds: number = segundos; //minute * 60;
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
        if (this.contador < this.Actividades.length) {
          this.votarMedaigual(this.contador);
        }
      }
    }, 1000);
  }
  enviarVoto(id: number | undefined, voto: number) {
    if (
      this.linksala !== undefined && id !== undefined) {
      const nombreSala = this.linksala; // Nombre de la sala desde la ruta
      const idActividad = id;

      // Llamar a la función para enviar el voto al servicio
      this.controlador.enviarVoto(nombreSala, idActividad, voto).subscribe(
        (response) => {
          // Manejo de la respuesta si es necesario
          console.log('Voto enviado:', response);
        },
        (error) => {
          // Manejo del error si la solicitud falla
          console.error('Error al enviar el voto:', error);
        }
      );

      // Actualizar el contador para la siguiente actividad
      this.contador++;
    } else {
      console.log('No se puede enviar el voto: nombre de sala o actividad indefinido.');
    }
  }



}
