import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, authState, browserSessionPersistence  } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private auth: Auth) {}

  registrarUsuarioEmail({email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  ingresarUsuarioEmail({email, password}: any) {
    this.auth.setPersistence(browserSessionPersistence);
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  estadoUsuario(){
    return authState(this.auth);
  }
  
  salirUsuario(){
    return signOut(this.auth);
  }
}
