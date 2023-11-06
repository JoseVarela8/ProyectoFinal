import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenResponse} from "../../models/TokenResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_ENDPOINT:string = "https://www.desarrollowebback.duckdns.org/api/";
  constructor(private http:HttpClient) { }

  public obtenerTokenAdmin(user:string, pass:string,){
    let ending = "auth/gettoken";
    let header = {
      'accept': '*/*',
      'Content-Type': 'application/json'
    }
    const body = {
      "username": `${user}`,
      "password": `${pass}`,
      "typerole": `administrador`
    };
    return this.http.post<TokenResponse>(this.API_ENDPOINT+ending, body,{ headers: header});
  }
  public  obtenerTokenAnonimo(){
    let ending = "auth/gettoken";
    let header = {
      'accept': '*/*',
      'Content-Type': 'application/json'
    }
    const body = {
      "username": "anonimo",
      "password": "password",
      "typerole": "usuario"
    };
    return this.http.post<TokenResponse>(this.API_ENDPOINT+ending, body,{ headers: header});
  }




}
