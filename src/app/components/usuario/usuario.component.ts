import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor( private router: ActivatedRoute,
               private _usuarioService: UsuarioService
  ) {

    console.log(_usuarioService.getInformacionATransmitir() + ' en la parte del padre.');

    this.router.params.subscribe( parametros => {
      console.log('Ruta padre');
      console.log(parametros);
    });
  }

  ngOnInit() {
  }

}
