import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@srv/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUsuarioForm: FormGroup;

  constructor(private logServ: LoginService, private router: Router) {
    this.loginUsuarioForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.logServ
      .ingresarUsuarioEmail(this.loginUsuarioForm.value)
      .then((response) => {
        this.router.navigate(['/'])
        console.log(response);
      })
      .catch((error) => console.log(error));
  }
}
