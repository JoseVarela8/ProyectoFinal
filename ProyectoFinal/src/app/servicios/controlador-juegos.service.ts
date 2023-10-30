import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { Propuesta } from '../clases/propuesta';
import { Actividad } from '../clases/actividad';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class ControladorJuegosService {
  juegos: Juego[] = [];
  propuestas: Propuesta[] = [
    { id:1, nombre: 'propuesta 1', actividades:[
      { id:1, titulo: 'actividad 1', descripcion: 'a', imagen:"imagen1" },
      { id:2, titulo: 'actividad 2', descripcion: 'b', imagen:"imagen2" },
      { id:3, titulo: 'actividad 3', descripcion: 'c', imagen:"imagen3" },
      ]
    },
    { id:2, nombre: 'propuesta 2', actividades:[
      { id:3, titulo: 'actividad 3', descripcion: 'c', imagen:"imagen3" },
      { id:4, titulo: 'actividad 4', descripcion: 'd', imagen:"imagen4" },
      { id:5, titulo: 'actividad 5', descripcion: 'e', imagen:"imagen5" },
      ]
    },
  ];
  actividades: Actividad[] = [
    { id:1, titulo: 'actividad 1', descripcion: 'a', imagen:"imagen1" },
    { id:2, titulo: 'actividad 2', descripcion: 'b', imagen:"imagen2" },
    { id:3, titulo: 'actividad 3', descripcion: 'c', imagen:"imagen3" },
    { id:4, titulo: 'actividad 4', descripcion: 'd', imagen:"imagen4" },
    { id:5, titulo: 'actividad 5', descripcion: 'e', imagen:"imagen5" },
  ];
  usuarios: Usuario[] = [];

  constructor() { }


  crearUsuario(nombre: string, contrasenia: string){
    let id = this.usuarios.length + 1;
    let usuario = {id, nombre, contrasenia}
    this.usuarios.push(usuario)
  }

  listarUsuario(){
    return this.usuarios;
  }

  crearActividad(titulo: string, descripcion: string, imagen:string){
    let id = this.actividades.length + 1
    let actividad = {id, titulo, descripcion, imagen}
    this.actividades.push(actividad)
  }

  listarActividades(){
    return this.actividades;
  }

  crearPropuesta(actividades: Actividad[], nombre:string){
    let id = this.propuestas.length + 1
    let propuesta = {id, nombre, actividades}
    this.propuestas.push(propuesta)
  }

  listarPropuestas(){
    return this.propuestas;
  }
  
  crearJuego(prop: Propuesta, nombre:string, link:string, codigo:string){
    
  }

  listarJuegos(){
    return this.juegos;
  }

  getJuego(codigo:string){
    let juego = this.juegos.find(x => x.codigo == codigo);
    return juego?.link
  }
}
