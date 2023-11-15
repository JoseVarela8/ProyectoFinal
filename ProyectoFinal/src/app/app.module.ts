import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearJuegoComponent } from './componentes/crear-juego/crear-juego.component';
import { CrearPropuestaComponent } from './componentes/crear-propuesta/crear-propuesta.component';
import { CrearActividadComponent } from './componentes/crear-actividad/crear-actividad.component';
import { SalaComponent } from './componentes/sala/sala.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegisterComponent } from './componentes/register/register.component';

import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {AuthService} from "./servicios/auth/auth.service";
import { HttpClientModule} from "@angular/common/http";
import { SalasAdminComponent } from './componentes/salas-admin/salas-admin.component';
import {Sha512Service} from "./servicios/cripto/sha512.service";
import {CookieService} from "ngx-cookie-service";
import { MostrarActividadesComponent } from './componentes/mostrar-actividades/mostrar-actividades.component';
import { MostrarPropuestasComponent } from './componentes/mostrar-propuestas/mostrar-propuestas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    CrearJuegoComponent,
    CrearPropuestaComponent,
    CrearActividadComponent,
    SalaComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    SalasAdminComponent,
    MostrarActividadesComponent,
    MostrarPropuestasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [
    AuthService,
    CookieService,
    Sha512Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
