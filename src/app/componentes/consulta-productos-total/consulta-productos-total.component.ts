import { Component, OnInit } from '@angular/core';
import { Productos } from '@app/modelos/productos';
import { ProductosService } from '@app/servicios/productos.service';

@Component({
  selector: 'app-consulta-productos-total',
  templateUrl: './consulta-productos-total.component.html',
  styleUrls: ['./consulta-productos-total.component.css'],
})
export class ConsultaProductosTotalComponent implements OnInit {
  constructor(private prdServ: ProductosService) {}

  productos: Productos[] = [];
  productoSeleccionado = [];
  filtroProducto: string = '';
  mostrarDatos: boolean = false;
  prdID: string = '';
  prdNombre: string = '';

  ngOnInit(): void {
    this.prdServ.obtenerProductos().subscribe((datos) => {
      this.productos = datos;
    });
  }

  expandirProducto(datos: any) {
    this.mostrarDatos = true;
    this.prdID = datos.id;
    this.prdNombre = datos.nombre;
  }
}
