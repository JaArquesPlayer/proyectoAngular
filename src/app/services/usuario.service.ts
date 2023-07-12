import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private informacionATransmitir = 'Esta es la prueba de la transmisión entre componentes';

  constructor() {}

  getInformacionATransmitir() {
    return this.informacionATransmitir;
  }
}
