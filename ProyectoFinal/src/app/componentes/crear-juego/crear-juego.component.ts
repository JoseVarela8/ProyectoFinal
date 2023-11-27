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
    this.controlador.listarActividades().subscribe(res => {
      this.dropdownList = res;
    });

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

  crearJuego(nombre:string, selectedItems: any[]) {
    console.log("Actividades selec",selectedItems)
    let idactividades: number [] = [];
    selectedItems.forEach(item => {
      if (item.id) {
        idactividades.push(item.id); // Agregar el id a la variable ids
      }
      console.log("ID actividades antes de enviar al controlador: ",idactividades)
    });
    this.controlador.crearJuego(nombre, idactividades).subscribe(data =>{
      alert(data.mensaje) //si tira undefined anda
    });
    this.router.navigate(["/inicio"])
  }
}
