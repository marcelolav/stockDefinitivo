import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingresos } from '@app/modelos/ingresos';
import { Productos } from '@app/modelos/productos';
import { ProductosService } from '@srv/productos.service';
import { IngresosService } from '@srv/ingresos.service';

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
  importeTotal: number = 0;

  constructor(
    private prdServ: ProductosService,
    private ingServ: IngresosService
  ) {
    this.frmIngresos = new FormGroup({
      refFactura: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      idProducto: new FormControl(''),
      nombreProducto: new FormControl(''),
      precioUnitario: new FormControl(0, [Validators.required]),
      cantidad: new FormControl(0, [Validators.required, Validators.min(1)]),
      importeTotal: new FormControl(0),
    });
    this.frmIngresos.get('precioUnitario')?.valueChanges.subscribe((dato) => {
      this.precioUnitario = dato;
      this.precioSubtotal = dato * this.cantidad;
      this.frmIngresos.patchValue({ importeTotal: this.precioSubtotal });
    });
    this.frmIngresos.get('cantidad')?.valueChanges.subscribe((dato) => {
      this.cantidad = dato;
      this.precioSubtotal = dato * this.precioUnitario;
      this.frmIngresos.patchValue({ importeTotal: this.precioSubtotal });
    });
    this.frmIngresos.get('nombreProducto')?.valueChanges.subscribe(async (dato) => {
        // aca iria el filtro para que ponga el precio unitario del producto
        const prodBuscado = await this.prdServ.obtenerProducto(this.frmIngresos.get('nombreProducto')?.value
        );
        this.precioUnitario = prodBuscado.precio_vp;
        this.frmIngresos.patchValue({ idProducto: prodBuscado.id })
        this.frmIngresos.patchValue({ precioUnitario: this.precioUnitario });
        console.log(this.frmIngresos.value);
      });
  }

  ngOnInit(): void {
    // Obtiene lista de productos para el select de productos
    this.prdServ.obtenerProductos().subscribe((datos) => {
      this.listaProductos = datos;
    });
  }
  // Agrega un item nuevo y calcula el total generl con variable incrementable
  agregarItem(dato: any) {
    this.tablaItems.push(dato);
    this.importeTotal = this.importeTotal + dato.importeTotal;
    this.hayItems = true;
  }

  // Graba todos los registros de items del ingreso recorriendo el array Tablaitems
  ingresarTotal() {
    this.tablaItems.forEach((x) => {
      this.ingServ.agregaIngreso(x);
      this.ingServ.modificaCantidad(x.idProducto, x.cantidad);
      this.tablaItems = [];
      this.hayItems = false;
      this.frmIngresos.reset();
    });
  }
}
