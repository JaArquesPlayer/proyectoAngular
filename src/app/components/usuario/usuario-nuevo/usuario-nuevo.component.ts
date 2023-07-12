import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsuarioService} from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private router: ActivatedRoute,
               private _usuarioService: UsuarioService
  ) {

    console.log(_usuarioService.getInformacionATransmitir() + ' en la parte del hijo usuario-nuevo.');

    this.router.parent.params.subscribe( parametros => {
      console.log('Ruta hija');
      console.log(parametros);
    });
  }

  ngOnInit() {
  }

}
