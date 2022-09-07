import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@srv/productos.service';
import { Productos } from '@mdl/productos';

@Component({
  selector: 'app-consulta-precios-codigo',
  templateUrl: './consulta-precios-codigo.component.html',
  styleUrls: ['./consulta-precios-codigo.component.css']
})
export class ConsultaPreciosCodigoComponent implements OnInit {
  filtroProducto: string = '';
  productos: Productos[] = [];
  constructor(private prdServ: ProductosService) { }

  ngOnInit(): void {
    this.prdServ.obtenerProductos().subscribe(datos => {
      this.productos = datos;
    })
  }

}
