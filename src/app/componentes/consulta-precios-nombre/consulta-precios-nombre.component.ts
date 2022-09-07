import { Component, OnInit } from '@angular/core';
import { Productos } from '@mdl/productos';
import { ProductosService } from '@app/servicios/productos.service';



@Component({
  selector: 'app-consulta-precios',
  templateUrl: './consulta-precios-nombre.component.html',
  styleUrls: ['./consulta-precios-nombre.component.css']
})


export class ConsultaPreciosNombreComponent implements OnInit {

  filtroProducto: string = '';
  productos: Productos[] = [];
  ordenado: string = 'nombre' ;  // aca va el nombre del campo por el que deseo ordenar
  
  constructor(private prdServ: ProductosService) {
    
   }
  ngOnInit(): void {
    this.prdServ.obtenerProductos().subscribe(datos => {
      this.productos = datos;
    })
  }

  ordenarPor(campo: string) {
    console.log(campo)
    this.ordenado = campo.trim();
    console.log('cambio a ->', this.ordenado )
  }

}
