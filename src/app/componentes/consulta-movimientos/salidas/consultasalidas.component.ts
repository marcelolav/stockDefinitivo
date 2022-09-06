import { Component, OnInit } from '@angular/core';
import { Salidas } from '@app/modelos/salidas';
import { SalidasService } from '@app/servicios/salidas.service';

@Component({
  selector: 'app-consultasalidas',
  templateUrl: './consultasalidas.component.html',
  styleUrls: ['./consultasalidas.component.css']
})
export class ConsultaSalidasComponent implements OnInit {

  searchValueFecha: string = '';
  listaSalidas: Salidas[] = []

  constructor(private salServ: SalidasService) { }

  ngOnInit(): void {
    this.salServ.obtenerSalidas().subscribe(datos => {
      this.listaSalidas = datos;
    })
  }

}
