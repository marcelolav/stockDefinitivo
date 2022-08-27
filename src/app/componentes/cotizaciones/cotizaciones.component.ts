import { Component, OnInit } from '@angular/core';
import { CotizacionesService } from '../../servicios/cotizaciones.service';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css'],
})
export class CotizacionesComponent implements OnInit {
  listaCotizaciones: any = [];

  constructor(private coti: CotizacionesService) {}

  ngOnInit(): void {
    this.coti.getCotizaciones().subscribe((data) => {
      this.listaCotizaciones = data;
      console.log(this.listaCotizaciones);
    });
  }

  displayInfo(){
    console.log(this.listaCotizaciones);
  }
}