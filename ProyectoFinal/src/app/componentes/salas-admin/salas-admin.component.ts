import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Juego } from 'src/app/clases/juego';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-salas-admin',
  templateUrl: './salas-admin.component.html',
  styleUrls: ['./salas-admin.component.css']
})
export class SalasAdminComponent {
  SalasActivas : Juego[] = []
  enSala: boolean = false
  linksala: string = ""
  
  constructor(private controlador:ControladorJuegosService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(){
    this.linksala = this.route.snapshot.params['link'];
    if(this.linksala != undefined){
      this.enSala = true;
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
}
