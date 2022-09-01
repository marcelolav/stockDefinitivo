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
  totalGeneral: number = 0;

  constructor(
    private prdServ: ProductosService,
    private ingServ: IngresosService
  ) {
    this.frmIngresos = new FormGroup({
      refFactura: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      idProducto: new FormControl(''),
      nombreProducto: new FormControl(''),
      precioUnitario: new FormControl(0),
      precioNuevo: new FormControl(0),
      cantidadActual: new FormControl(0),
      cantidadIngreso: new FormControl(0, [Validators.required, Validators.min(1)]),
      cantidadNueva: new FormControl(0),
      importeTotal: new FormControl(0),
    });
    // calculo subtotal de linea si el precio cambia o se actualiza
    this.frmIngresos.get('precioNuevo')?.valueChanges.subscribe((dato) => {
      let cantIng = this.frmIngresos.get('cantidadIngreso')?.value;
      let precio1 = this.frmIngresos.get('precioUnitario')?.value;
      let precio2 = this.frmIngresos.get('precioNuevo')?.value;
      if( precio1 < precio2) {
        this.frmIngresos.patchValue({ importeTotal: cantIng * precio2 });
      } else {
        this.frmIngresos.patchValue({ importeTotal: cantIng * precio1 });
      }
    })
    // Calculo lo mismo de antes si se actualiza la cantidad
    this.frmIngresos.get('cantidadIngreso')?.valueChanges.subscribe((dato) => {
      let precio1 = this.frmIngresos.get('precioUnitario')?.value;
      let precio2 = this.frmIngresos.get('precioNuevo')?.value;
      let cantIng = this.frmIngresos.get('cantidadIngreso')?.value;
      let cantExi = this.frmIngresos.get('cantidadActual')?.value;
      this.frmIngresos.patchValue({ cantidadNueva: parseFloat(cantExi) + parseFloat(cantIng)})
      if( precio2 > precio1) {
         this.frmIngresos.patchValue({ importeTotal: precio2 * cantIng });
      } else {
         this.frmIngresos.patchValue({ importeTotal: precio1 * cantIng});
      }
    });
    this.frmIngresos.get('nombreProducto')?.valueChanges.subscribe(async (dato) => {
        // aca iria el filtro para que ponga el precio unitario del producto
        const prodBuscado = await this.prdServ.obtenerProducto(this.frmIngresos.get('nombreProducto')?.value);
        this.frmIngresos.patchValue({ precioUnitario: prodBuscado.precio_vp});
        this.frmIngresos.patchValue({ cantidadActual: prodBuscado.stock});
        this.frmIngresos.patchValue({ idProducto: prodBuscado.id })
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
    this.totalGeneral = this.totalGeneral + dato.importeTotal;
    this.hayItems = true;
  }

  // Graba todos los registros de items del ingreso recorriendo el array Tablaitems
  ingresarTotal() {
    this.tablaItems.forEach((x) => {
      this.ingServ.agregaIngreso(x);
      let cantModificar = x.cantidadIngreso + this.frmIngresos.get('cantidadActual')?.value
      if (x.importeTotal < x.precioNuevo) {
        this.ingServ.modificarProducto(x.idProducto, x.cantidadNueva, x.precioNuevo)
      } else {
        this.ingServ.modificarProducto(x.idProducto, x.cantidadNueva, x.importeTotal)
      }
      this.tablaItems = [];
      this.hayItems = false;
      this.frmIngresos.reset();
    });
  }

  actualizarItems() {
    // Esto se refactorizo de todo lo anterior para reusar cosas
  }
}
