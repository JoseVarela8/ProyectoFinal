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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
