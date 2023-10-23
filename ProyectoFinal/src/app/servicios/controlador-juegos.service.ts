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
  propuestas: Propuesta[] = [];
  actividades: Actividad[] = [];
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
    if (imagen){
      imagen = ""
    }
    let actividad = {id, titulo, descripcion, imagen}
    this.actividades.push(actividad)
  }

  listarActividades(){
    return this.actividades;
  }

  crearPropuesta(actividades: Actividad[]){
    let id = this.propuestas.length + 1
    let propuesta = {id, actividades}
    this.propuestas.push(propuesta)
  }

  listarPropuestas(){
    return this.propuestas;
  }
  
  crearJuego(prop: Propuesta){
    
  }

  listarJuegos(){
    return this.juegos;
  }
}
