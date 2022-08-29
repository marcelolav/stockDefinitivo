import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Productos } from '@app/modelos/productos';
import { ProductosService } from '@srv/productos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  frmIngresos: FormGroup;
  listaProductos: Productos[] = [];
  frmEnvio: any;

  constructor(private prdServ: ProductosService) { 
    this.frmIngresos = new FormGroup({
      id: new FormControl(''),
      refFactura: new FormControl('', [Validators.required]),
      fecha: new FormControl(''),
      idProducto: new FormControl(''),
      codigoProducto: new FormControl(''),
      nombreProducto: new FormControl(''),
      precioUnitario: new FormControl(0),
      cantidad: new FormControl(0),
      importeTotal: new FormControl(0)
    })
  }

  ngOnInit(): void {
    this.prdServ.obtenerProductos().subscribe((datos) => {
      this.listaProductos = datos;
    });
  }

  agregarItem(dato:any) {
    this.frmEnvio = dato;
    console.log(dato);
  }

}
