import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingresos } from '@app/modelos/ingresos';
import { Productos } from '@app/modelos/productos';
import { ProductosService } from '@srv/productos.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
})
export class IngresosComponent implements OnInit {
  frmIngresos: FormGroup;
  listaProductos: Productos[] = [];
  hayItems: boolean = false;
  tablaItems: Ingresos[] = [];

  // temporal hardcode
  nombreProducto: string = '';
  precioUnitario: number = 0;
  cantidad: number = 0;
  precioSubtotal: number = 0;

  constructor(private prdServ: ProductosService) {
    this.frmIngresos = new FormGroup({
      id: new FormControl(''),
      refFactura: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      idProducto: new FormControl(''),
      codigo_barra: new FormControl('', [Validators.required]),
      nombreProducto: new FormControl(''),
      precioUnitario: new FormControl(0, [Validators.required]),
      cantidad: new FormControl(0, [Validators.required]),
      importeTotal: new FormControl(0),
    });
    this.frmIngresos.get('precioUnitario')?.valueChanges.subscribe((dato) => {
      this.precioUnitario = dato;
      this.precioSubtotal = dato * this.cantidad;
      this.frmIngresos.patchValue({importeTotal: this.precioSubtotal})
      console.log(this.precioSubtotal);
    });
    this.frmIngresos.get('cantidad')?.valueChanges.subscribe((dato) => {
      this.cantidad = dato;
      this.precioSubtotal = dato * this.precioUnitario;
      this.frmIngresos.patchValue({importeTotal: this.precioSubtotal})
    });
    this.frmIngresos.get('codigo_barra')?.valueChanges.subscribe(dato => {
      // aca iria el filtro para que ponga el codigo_barra correspondiente de cada producto
      const codigo_buscar = this.frmIngresos.get('codigo_barra')?.value
    });
  }

  ngOnInit(): void {
    this.prdServ.obtenerProductos().subscribe((datos) => {
      this.listaProductos = datos;
    });
  }

  agregarItem(dato: any) {
    this.tablaItems.push(dato);
    this.hayItems = true;
    console.log(dato);
  }

  calcularSubtotalItem(dato: any) {
    console.log('codigo->', dato);
  }

  onChangeEvent(event: any) {
    console.log(event.target.value);
  }
}
