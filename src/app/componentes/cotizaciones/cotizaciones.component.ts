import { AfterContentInit, Component, OnInit } from '@angular/core';
// import { CotizacionesService } from '@srv/cotizaciones.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css'],
})
export class CotizacionesComponent implements OnInit, AfterContentInit {
  
  listaCotizaciones: any = [];
 
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerCotizaciones();
  }

  ngAfterContentInit() {
    this.obtenerCotizaciones();
  }

  async obtenerCotizaciones() {
    await this.http.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales').subscribe(
      datos => {this.listaCotizaciones = datos;});
  }
}
