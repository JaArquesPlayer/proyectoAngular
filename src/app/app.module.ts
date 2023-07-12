import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';

//Servicios
import { UsuarioService } from './services/usuario.service';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle/usuario-detalle.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo/usuario-nuevo.component';
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
  providers: [
    UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
