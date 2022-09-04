import { Component, OnDestroy, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@app/servicios/login.service';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { EMPTY, map, Observable, Subscription } from 'rxjs';
import { traceUntilFirst } from '@angular/fire/performance';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  // frmLogin: FormGroup;
  
  private readonly userDisposable: Subscription|undefined;
  public readonly user: Observable<User | null> = EMPTY;
  showLoginButton = false;
  showLogoutButton = false;

  constructor(private logServ: LoginService, private auth: Auth) { 
    // this.frmLogin = new FormGroup({
    //   usuario: new FormControl(''),
    //   password: new FormControl('')
    // });
    if (auth) {
      this.user = authState(this.auth);
      this.userDisposable = authState(this.auth).pipe(
        traceUntilFirst('auth'),
        map(u => !!u)
      ).subscribe(isLoggedIn => {
        this.showLoginButton = !isLoggedIn;
        this.showLogoutButton = isLoggedIn;
      });
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }

  async login() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async loginAnonymously() {
    return await signInAnonymously(this.auth);
  }

  async logout() {
    return await signOut(this.auth);
  }
}
