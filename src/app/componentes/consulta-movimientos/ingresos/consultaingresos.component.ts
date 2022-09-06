import { Component, OnInit, PipeTransform } from '@angular/core';
import { Ingresos } from '@app/modelos/ingresos';
import { IngresosService } from '@srv/ingresos.service';

@Component({
  selector: 'app-consultaingresos',
  templateUrl: './consultaingresos.component.html',
  styleUrls: ['./consultaingresos.component.css']
})
export class ConsultaIngresosComponent implements OnInit {
  
  searchValue: string = ''
  listaIngresos: Ingresos[] = []
  
  constructor(private ingServ: IngresosService) { }
  
  ngOnInit(): void {
    this.ingServ.obtenerIngresos().subscribe(datos => {
      this.listaIngresos = datos;
    })
  }
}
