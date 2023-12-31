import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { Propuesta } from '../clases/propuesta';
import { Actividad } from '../clases/actividad';
import { Usuario } from '../clases/usuario';
import { HttpClient } from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
import { Sha512Service } from './cripto/sha512.service';
import { TokenResponse } from '../models/TokenResponse';
import { crearActividadResponse } from '../models/crearActividadResponse';
import { getActividadesResponse } from '../models/getActividadesRespones';
import { enviarVoto } from '../models/enviarVoto';
import { AuthService } from './auth/auth.service';
import { elementAt } from 'rxjs';
import { JActividad } from '../clases/j-actividad';
import { getRoomsResponse } from '../models/getRoomsResponse';

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
    { id:1, nombre: 'Nico', contrasenia: '1234'},
  ];
  logueado: boolean = false;

  constructor(private http:HttpClient, private  cookie:CookieService, private sha:Sha512Service, private auth:AuthService) { }

  ngOnInit() {
    //this.actividades
    //this.juegos
    this.allActivities();
    this.allRooms();
  }

  crearUsuario(nombre: string, contrasenia: string){
    let id = this.usuarios.length + 1;
    let usuario = {id, nombre, contrasenia}
    this.usuarios.push(usuario)
  }

  getUsuario(nombre: string, contrasenia: string){
    const encontro = this.usuarios.find(({nombre,contrasenia}) => nombre == nombre && contrasenia == contrasenia); 
    if (encontro!=null){
      this.logueado=true;
      return true
    }
    else{
      return false
    }
   }

  listarUsuario(){
    return this.usuarios;
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
    return this.http.post<crearActividadResponse>(this.API_ENDPOINT+ending, body,{ headers: header});
  }

  listarActividades(){
    return this.actividades;
  }

  allActivities(){
    this.getActividades().subscribe(
      (response: getActividadesResponse[]) => {
        this.actividades = response.map((actividadData: any) => {
          return {
            id: actividadData.id,
            titulo: actividadData.titulo,
            descripcion: actividadData.descripcion,
            imagen: actividadData.image || '' // Si 'image' puede ser null, asignamos un valor por defecto
          } as Actividad;
        });
        console.log('Actividades obtenidas:', this.actividades);
      },
      (error) => {
        console.error('Error al obtener actividades:', error);
      }
    );
  }
  
  getActividades(){
    console.log("Cookie: ",this.cookie.get(this.sha.EncryptSHA512("token")));
    let ending = "actividades/getallactividades";
    let header = {
      'accept': '*/*',
      'Authorization': `Bearer ${this.cookie.get(this.sha.EncryptSHA512("token"))}`,
      'Content-Type': 'application/json'
    } 
    const body = {
    };
    return this.http.get<getActividadesResponse[]>(this.API_ENDPOINT+ending,{ headers: header});
  }
  

  obtenerActividadesPorIds(ids: JActividad[]): Actividad[] {
    // Filtrar los IDs que no sean undefined y convertirlos a número

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
    let propuesta = {id, nombre, actividades}
    this.propuestas.push(propuesta)
  }

  listarPropuestas(){
    return this.propuestas;
  }
  /*
  crearJuego(prop: Propuesta, nombre:string, link:string, codigo:string){
    let id = this.juegos.length + 1
    let juego = {id, nombre: nombre, propuesta: prop, link, codigo}
    this.juegos.push(juego)
  }
  */
  crearJuego(nombre: string, idactividades: number[]){
    console.log("ID actividades creando juego en controlador",idactividades)
    let ending = "sala/crearsala";
    let header = {
      'accept': '*/*',
      'Authorization': `Bearer ${this.cookie.get(this.sha.EncryptSHA512("token"))}`,
      'Content-Type': 'application/json'
    } 
    const body = {
      "nombre": `${nombre}`,
      "idActividades": `${idactividades}`
    };
    return this.http.post<crearActividadResponse>(this.API_ENDPOINT+ending, body,{ headers: header});
  }

  listarJuegos(){
    return this.juegos;
  }

  allRooms(){
    this.getRooms().subscribe(
      (response: getRoomsResponse[]) => {
        this.juegos = response.map((juegoData: any) => {
          return {
            nombre: juegoData.nombre,
            actividades: juegoData.actividades,
            isOpen: juegoData.isOpen,
            
          } as Juego;
        });
        console.log('Juegos obtenidos:', this.juegos);
      },
      (error) => {
        console.error('Error al obtener juegos:', error);
      }
    );
  }
  
  getRooms(){
    console.log("Cookie: ",this.cookie.get(this.sha.EncryptSHA512("token")));
    let ending = "sala/obtenersalas";
    let header = {
      'accept': '*/*',
      'Authorization': `Bearer ${this.cookie.get(this.sha.EncryptSHA512("token"))}`,
      'Content-Type': 'application/json'
    } 
    const body = {
    };
    return this.http.get<getRoomsResponse[]>(this.API_ENDPOINT+ending,{ headers: header});
  }

  
  getJuego(codigo:string){
    let juego = this.juegos.find(x => x.nombre === codigo);
    if (juego == undefined){
      return undefined
    } else {
      return juego?.nombre; // Suponiendo que hay una propiedad nombreSala en tu objeto juego
    }
  }
  
  getJuego2(link:string){
    let juego = this.juegos.find(x => x.nombre == link);
    return juego
  }


  logeado(){
    this.logueado = true;
  }

  checkAdminInit(){
    return this.logueado;
  }

  desloguearse(){
    this.logueado = false;
  }

  enviarVoto(nombreSala: string, nombreActividad: number, voto: number) {
    const ending = 'sala/votaractividad';
  
    const header = {
      'accept': '*/*',
      'Authorization': `Bearer ${this.cookie.get(this.sha.EncryptSHA512('token'))}`,
      'Content-Type': 'application/json'
    };
  
    const body = {
      "nombreSala": nombreSala,
      "nombreActividad": nombreActividad,
      "voto": voto
    };
  
    return this.http.post<enviarVoto>(this.API_ENDPOINT + ending, body, { headers: header });
  }
  

}
