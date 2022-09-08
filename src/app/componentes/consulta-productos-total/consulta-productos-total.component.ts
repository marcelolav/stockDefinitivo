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
  prdPVP: number = 0;
  prdPVD: number = 0;
  prdPCP: number = 0;
  prdPCD: number = 0;
  prdRubro: string = '';
  prdImagen: string = ''

  ngOnInit(): void {
    this.prdServ.obtenerProductos().subscribe((datos) => {
      this.productos = datos;
    });
  }

  expandirProducto(datos: any) {
    this.mostrarDatos = true;
    this.prdID = datos.id;
    this.prdNombre = datos.nombre;
    this.prdPVP = datos.precio_vp;
    this.prdPVD = datos.precio_vd;
    this.prdPCP = datos.precio_cp;
    this.prdPCD = datos.precio_cd;
    this.prdRubro = datos.rubro;
    this.prdImagen = 'https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067';  
  }
}
