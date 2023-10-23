import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { SalaComponent } from './componentes/sala/sala.component';
import { CrearJuegoComponent } from './componentes/crear-juego/crear-juego.component';
import { CrearPropuestaComponent } from './componentes/crear-propuesta/crear-propuesta.component';
import { CrearActividadComponent } from './componentes/crear-actividad/crear-actividad.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sala/:link', component: SalaComponent },
  { path: 'sala', component: SalaComponent },
  { path: 'juego', component: CrearJuegoComponent },
  { path: 'propuesta', component: CrearPropuestaComponent },
  { path: 'actividad', component: CrearActividadComponent },
  { path: 'registrarse', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
