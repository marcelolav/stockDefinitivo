import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@srv/productos.service';
import { Productos } from '@mdl/productos';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RubrosService } from '@app/servicios/rubros.service';
import { Rubros } from '@app/modelos/rubros';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  frmProductos: FormGroup;
  modificacion: boolean = false;
  listaProductos: Productos[] = [];
  listaRubros: Rubros[] = [];

  constructor(
    private prdServ: ProductosService,
    private rubServ: RubrosService
  ) {
    this.frmProductos = new FormGroup({
      id: new FormControl(''),
      codigo_barra: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      precio_cd: new FormControl(0),
      precio_cp: new FormControl(0),
      precio_vd: new FormControl(0),
      precio_vp: new FormControl(0),
      rubro: new FormControl(''),
      stock: new FormControl(0),
      minimo: new FormControl(0),
      fotoURL: new FormControl('')
    });
    this.rubServ.listarRubros().subscribe((datos) => {
      this.listaRubros = datos;
    });
  }

  ngOnInit(): void {
    this.prdServ.obtenerProductos().subscribe((datos) => {
      this.listaProductos = datos;
    });
  }

  agregarProducto(dato: Productos) {
    this.prdServ.agregaProducto(dato);
    this.frmProductos.reset();
  }
  eliminarProducto(dato: Productos) {
    if (confirm('¿Está seguro de eliminar el producto?')) {
      this.prdServ.borrarProducto(dato);
    }
  }
  // El editar se llama desde la lista de productos y solamente pone los datos en los campos
  editarProducto(dato: Productos) {
    this.frmProductos.patchValue(dato);
    this.modificacion = true;
  }
  // el modificar sirve para modificar definitivamente el producto que esta viendose en el abm
  modificarProducto(dato: Productos) {
    this.prdServ.editarProducto(dato.id!, dato);
    this.frmProductos.reset();
    this.modificacion = false;
  }

  cancelarForm(){
    this.frmProductos.reset();
  }
}
