import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor() { }




  // Setea el storage con la variable login en 1 (todo string)
  ingresaLogin() {
    localStorage.setItem('login','1');
    return;
  }

  // Devuelve true si esta logueado y false si no está logueado o no encuentra la variable login
  consultaEstado() {
    const logeado = localStorage.getItem('login');
    if (logeado != null && logeado === '1') {
        return true
    } else { return false};
  }
  // elimina la variable login del storage 
  salidaLogin() {
    localStorage.removeItem('login');
  }
  codigoError(codigo: string) {
    switch (codigo) {
      // El correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';

      // Contraseña debil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil';

      // Correo invalido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo invalido';

      // Contraseña incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña incorrecta';

      // El usuario no existe
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe'; 
      default:
        return 'Error desconocido';
    }
  }
}
export enum FirebaseCodeErrorEnum {
  EmailAlreadyInUse = 'auth/email-already-in-use',
  WeakPassword = 'auth/weak-password',
  InvalidEmail = 'auth/invalid-email',
  WrongPassword = 'auth/wrong-password',
  UserNotFound = 'auth/user-not-found',
}