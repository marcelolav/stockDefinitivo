import { Component, OnInit } from '@angular/core';
import { Productos } from '@mdl/productos';
import { ProductosService } from '@app/servicios/productos.service';



@Component({
  selector: 'app-consulta-precios',
  templateUrl: './consulta-precios.component.html',
  styleUrls: ['./consulta-precios.component.css']
})


export class ConsultaPreciosComponent implements OnInit {

  filtroProducto: string = '';
  productos: Productos[] = [];
  
  constructor(private prdServ: ProductosService) {
    
   }
  ngOnInit(): void {
    this.prdServ.obtenerProductos().subscribe(datos => {
      this.productos = datos;
    })
  }



}
