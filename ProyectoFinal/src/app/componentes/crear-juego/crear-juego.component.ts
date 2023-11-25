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
    this.dropdownList = this.controlador.listarActividades();

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

  crearJuego(nombre:string, selectedItems: any[]) {
    let idactividades: number [] = [];
    selectedItems.forEach(item => {
      if (item.id) {
        idactividades.push(item.id); // Agregar el id a la variable ids
      }
  });
    this.controlador.crearJuego(nombre, idactividades).subscribe(data =>{
      alert(data.mensaje)
    });
    this.router.navigate(["/inicio"])
  }
}
