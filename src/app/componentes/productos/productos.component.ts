import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@srv/productos.service';
import { Productos } from '@mdl/productos';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  frmProductos: FormGroup;

  listaProductos: Productos[] = [];

  constructor(private prdServ: ProductosService) {
    this.frmProductos = new FormGroup({
      codigo_barra: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      precio_cd: new FormControl(0),
      precio_cp: new FormControl(0),
      precio_vd: new FormControl(0),
      precio_vp: new FormControl(0),
      rubro: new FormControl(''),
      stock: new FormControl(0),
      minimo: new FormControl(0),
    });
  }

  ngOnInit(): void {
    this.prdServ.obtenerProductos().subscribe((datos) => {
      this.listaProductos = datos;
    });
  }

  agregarProducto(dato: Productos) {
    console.log(dato);
  }
  eliminarProducto(dato: Productos) {
    console.log(dato);
  }

  editarProducto(dato: Productos) {
    console.log(dato);
  }
}
