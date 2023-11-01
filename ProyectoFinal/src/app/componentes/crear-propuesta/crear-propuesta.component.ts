import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Actividad } from 'src/app/clases/actividad';
import { ControladorJuegosService } from 'src/app/servicios/controlador-juegos.service';

@Component({
  selector: 'app-crear-propuesta',
  templateUrl: './crear-propuesta.component.html',
  styleUrls: ['./crear-propuesta.component.css']
})
export class CrearPropuestaComponent implements OnInit{
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings:IDropdownSettings = {};

  constructor(private controlador:ControladorJuegosService, private router:Router){}

  ngOnInit() {
    this.dropdownList = this.controlador.listarActividades();

    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'titulo',
      allowSearchFilter: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
    };
  }

  crearPropuesta(nombre:string) {
    this.controlador.crearPropuesta(this.selectedItems, nombre)
    this.router.navigate(["/inicio"])
  }
}
