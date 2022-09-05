import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  estaLogueado: boolean = false;

  constructor(private logServ: LoginService, private router: Router){};
  
  title = 'Sistema de Inventario';

  ngOnInit(): void {
    this.consultaEstadoUsuario();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.consultaEstadoUsuario();
  }

  consultaEstadoUsuario(){
    this.logServ.estadoUsuario().subscribe( estado => {
      if (estado) {
        this.estaLogueado = true
      } else {
        this.estaLogueado = false
      }
    });
  }

  salidaUsuario(){
    this.logServ.salirUsuario()
    .then( ()=> {
      this.estaLogueado = false;
      this.router.navigate(['/']);
    } )
    .catch( error => console.log(error));
  }
}
