import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { Propuesta } from '../clases/propuesta';
import { Actividad } from '../clases/actividad';
import { Usuario } from '../clases/usuario';
import { HttpClient } from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
import { Sha512Service } from './cripto/sha512.service';
import { crearActividadResponse } from '../models/crearActividadResponse';
import { AuthService } from './auth/auth.service';
import { JActividad } from '../clases/j-actividad';
import { waitForAsync } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ControladorJuegosService {

  API_ENDPOINT:string = "https://www.desarrollowebback.duckdns.org/api/";
  
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
  juegos: Juego[] = [
    { "isOpen": 0, "nombre": "sala1", "actividades": [
        {
          "id_actividad": 1,
          "votos_negativos": 0,
          "votos_neutrales": 0,
          "votos_positivos": 0
        },
        {
          "id_actividad": 2,
          "votos_negativos": 0,
          "votos_neutrales": 0,
          "votos_positivos": 0
        },
        {
          "id_actividad": 3,
          "votos_negativos": 0,
          "votos_neutrales": 0,
          "votos_positivos": 0
        }
      ]
    },
    {
      "isOpen": 0, "nombre": "sala2", "actividades": [
        {
          "id_actividad": 2,
          "votos_negativos": 0,
          "votos_neutrales": 0,
          "votos_positivos": 0
        },
        {
          "id_actividad": 3,
          "votos_negativos": 0,
          "votos_neutrales": 0,
          "votos_positivos": 0
        },
        {
          "id_actividad": 4,
          "votos_negativos": 0,
          "votos_neutrales": 0,
          "votos_positivos": 0
        }
      ]
    },
    {
      "isOpen": 0, "nombre": "sala3", "actividades": [
        {
          "id_actividad": 3,
          "votos_negativos": 0,
          "votos_neutrales": 0,
          "votos_positivos": 0
        },
        {
          "id_actividad": 4,
          "votos_negativos": 0,
          "votos_neutrales": 0,
          "votos_positivos": 0
        },
        {
          "id_actividad": 5,
          "votos_negativos": 0,
          "votos_neutrales": 0,
          "votos_positivos": 0
        }
      ]
    },
  ];

  usuarios: Usuario[] = [
    { id:1, nombre: 'Nico', contrasenia: '1234'},     //no tocar
  ];
  logueado: boolean = false;      //no tocar

  constructor(private http:HttpClient, private  cookie:CookieService, private sha:Sha512Service, private auth:AuthService) { }

  ngOnInit() {
      //no tocar
    //this.juegos
  }

  crearUsuario(nombre: string, contrasenia: string){
    let id = this.usuarios.length + 1;  
    let usuario = {id, nombre, contrasenia}       //no tocar
    this.usuarios.push(usuario)
  }

  getUsuario(nombre: string, contrasenia: string){
    const encontro = this.usuarios.find(({nombre,contrasenia}) => nombre == nombre && contrasenia == contrasenia); 
    if (encontro!=null){
      this.logueado=true;
      return true
    }                     //no tocar
    else{
      return false
    }
   }

  listarUsuario(){
    return this.usuarios; //no tocar
  }

  

  crearActividad(titulo: string, descripcion: string, imagen:string){
    /*let id = this.actividades.length + 1
    let actividad = {id, titulo, descripcion, imagen}
    this.actividades.push(actividad)*/
    console.log("Cookie: ",this.cookie.get(this.sha.EncryptSHA512("token")));
    let ending = "actividades/crearactividad";
    let header = {
      'accept': '*/*',
      'Authorization': `Bearer ${this.cookie.get(this.sha.EncryptSHA512("token"))}`,
      'Content-Type': 'application/json'
    } 
    const body = {
      "titulo": `${titulo}`,
      "descripcion": `${descripcion}`
    };
    return this.http.post<crearActividadResponse>(this.API_ENDPOINT+ending, body,{ headers: header}); //ta checkeado
  }

  listarActividades(){
    let ending = "actividades/getallactividades";
    let header = {
      'accept': '*/*',
      'Authorization': `Bearer ${this.cookie.get(this.sha.EncryptSHA512("token"))}`
    } 
    return this.http.get<Actividad[]>(this.API_ENDPOINT+ending,{ headers: header})  //ta checkeado
  }

  async obtenerActividadesPorIds(ids: JActividad[]): Promise<Actividad[]> {
    // Filtrar los IDs que no sean undefined y convertirlos a número
    /*let usuario = "root"
    let contrasenia = "password"
    this.auth.obtenerTokenAdmin(usuario,contrasenia).subscribe(data =>{
      this.cookie.set(this.sha.EncryptSHA512("token"), data.token);  //this.sha.EncryptSHA512(data.token)
      //alert(`Token: ${data.token}`);
    });*/
    
    await new Promise<void>((resolve) => {
      this.listarActividades().subscribe(res => {
        this.actividades = res;
        resolve();
      });
    });

    let ides: Number[] = [] 

    for ( let id of ids){
      if (id.id_actividad != undefined && !ides.includes(id.id_actividad)){
        ides.push(id.id_actividad)
      }
    }

    //const filteredIds = ids.filter(ids. => typeof ids.id_actividad === 'number');
    
    return this.actividades.filter(actividad => actividad.id != undefined && ides.includes(actividad.id));
  }


  crearPropuesta(actividades: Actividad[], nombre:string){
    let id = this.propuestas.length + 1
    let propuesta = {id, nombre, actividades}  //no tocar
    this.propuestas.push(propuesta)
  }

  listarPropuestas(){
    return this.propuestas;   //no tocar
  }


  /*
  crearJuego(prop: Propuesta, nombre:string, link:string, codigo:string){
    let id = this.juegos.length + 1
    let juego = {id, nombre: nombre, propuesta: prop, link, codigo}
    this.juegos.push(juego)
  }
  */
  crearJuego(nombre: string, idactividades: number[]){
    let ending = "sala/crearsala";
    let header = {
      'accept': '*/*',
      'Authorization': `Bearer ${this.cookie.get(this.sha.EncryptSHA512("token"))}`,
      'Content-Type': 'application/json'
    } 
    const body = 
    {
      "nombresala": `${nombre}`,
      "actividadesSeleccionadas": idactividades
    }
    return this.http.post<crearActividadResponse>(this.API_ENDPOINT+ending, body,{ headers: header}); //ta checkeado
  }

  listarJuegos(){
    return this.juegos;
    
    //let ending = "sala/obtenersala";
    //let header = {
    //  'accept': '*/*',
    //  'Authorization': `Bearer ${this.cookie.get(this.sha.EncryptSHA512("token"))}`
    //} 
    //return this.http.get<Juego[]>(this.API_ENDPOINT+ending,{ headers: header}) //falta checkear
  }


  getJuego(nombre:string){
    /*let juego = this.juegos.find(x => x.nombre === codigo);
    if (juego == undefined){
      return undefined
    } else {
      return juego?.nombre; //hacer el obtener sala aca con nombre
    }*/
    let usuario = "root"
    let contrasenia = "password"
    this.auth.obtenerTokenAdmin(usuario,contrasenia).subscribe(data =>{
      this.cookie.set(this.sha.EncryptSHA512("token"), data.token);  //this.sha.EncryptSHA512(data.token)
      //alert(`Token: ${data.token}`);
    });
    let ending = "sala/obtenersala/"+nombre;
    console.log(this.API_ENDPOINT+ending)
    let header = {
      'accept': '*/*',
      'Authorization': `Bearer ${this.cookie.get(this.sha.EncryptSHA512("token"))}`
    } 
    return this.http.get<Juego>(this.API_ENDPOINT+ending,{ headers: header})  //ta checkeado
  }
  
  getJuego2(link:string){
    let juego = this.juegos.find(x => x.nombre == link);
    return juego
  }


  logeado(){
    this.logueado = true; //no tocar
  }

  checkAdminInit(){
    return this.logueado; //no tocar
  }

  desloguearse(){
    this.logueado = false;    //no tocar
  }
  
  ip: string = 'ws://192.168.1.2:3000/'

  getip(){
    return this.ip
  }

}
