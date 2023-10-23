import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent {
  linksala: String | undefined
  enSala:boolean = false

  constructor(private controlador:ControladorJuegosService, private router: Router,private route:ActivatedRoute){}

  ingresar(codigo:string){
    let link = this.controlador.getJuego(codigo);
    this.router.navigate(['sala', "1234"])    //cuando haya juegos poner el link
  }

  ngOnInit(){
    this.linksala = this.route.snapshot.params['link'];
    if(this.linksala != undefined){
      this.enSala = true;
    }
    console.log(this.linksala)
  }
}
