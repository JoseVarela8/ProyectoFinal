import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/clases/juego';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent {
  linksala: String | undefined
  linkAdmin: boolean = false
  enSala:boolean = false
  SalasActivas : Juego[] = []

  constructor(private controlador:ControladorJuegosService, private router: Router,private route:ActivatedRoute){}

  ingresar(codigo:string){
    let link = this.controlador.getJuego(codigo);
    this.router.navigate(['sala', "1234"])    //cuando haya juegos poner el link
  }

  ngOnInit(){
    this.linksala = this.route.snapshot.params['link'];
    if(this.linksala != undefined && this.linksala !="ADMIN"){
      this.enSala = true;
      if(this.controlador.checkAdminInit()){
        this.linkAdmin=true;
      } 
    }
    if(this.linksala == "ADMIN"){
      this.linkAdmin=true;
      this.SalasActivas = this.controlador.listarJuegos()
    }
  }

  irsala(link:any){
    this.router.navigate(["/sala",link])
    .then(() => {
      this.ngOnInit();
    });
  }
}
