import { Component, OnInit } from '@angular/core';
import { Productos } from '@app/modelos/productos';
import { ProductosService } from '@app/servicios/productos.service';

@Component({
  selector: 'app-consulta-stock',
  templateUrl: './consulta-stock.component.html',
  styleUrls: ['./consulta-stock.component.css']
})
export class ConsultaStockComponent implements OnInit {

  filtroProducto: string = '';
  productos: Productos[] = [];
  constructor(private prdServ: ProductosService) { }


  ngOnInit(): void {
    this.prdServ.obtenerProductos().subscribe(datos => {
      this.productos = datos;
    })
  }

}
