import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      }
    }
  }
}
