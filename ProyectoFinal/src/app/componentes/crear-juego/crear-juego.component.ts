import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-crear-juego',
  templateUrl: './crear-juego.component.html',
  styleUrls: ['./crear-juego.component.css']
})
export class CrearJuegoComponent {
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings:IDropdownSettings = {};

  constructor(private controlador:ControladorJuegosService, private router:Router){}

  ngOnInit() {
    this.dropdownList = this.controlador.listarPropuestas();

    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nombre',
      allowSearchFilter: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      limitSelection: 1,
    };
  }

  crearJuego(nombre:string, link:string, codigo:string) {
    this.controlador.crearJuego(this.selectedItems, nombre, link, codigo)
    this.router.navigate(["/inicio"])
  }
}
