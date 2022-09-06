import { Component, OnInit, PipeTransform } from '@angular/core';
import { Ingresos } from '@app/modelos/ingresos';
import { IngresosService } from '@srv/ingresos.service';

@Component({
  selector: 'app-consultaingresos',
  templateUrl: './consultaingresos.component.html',
  styleUrls: ['./consultaingresos.component.css']
})
export class ConsultaIngresosComponent implements OnInit {
  
  listaIngresos: Ingresos[] = []
  
  constructor(private ingServ: IngresosService) { }
  
  ngOnInit(): void {
    this.ingServ.obtenerIngresos().subscribe(datos => {
      this.listaIngresos = datos;
     
    })
    //this.listaIngresos = this.ingServ.obtenerIngresosPorFecha()
  }
  // sortTable(prop: string) {
  //   this.path = prop.split('.');
  //   this.order = this.order * (-1); 
  //   return false; 
  // }

  
}
