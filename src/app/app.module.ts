import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-hijos/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-hijos/usuario-detalle.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-hijos/usuario-nuevo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    UsuarioNuevoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
