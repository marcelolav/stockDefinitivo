import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SalidasService } from '@srv/salidas.service';
import { Productos } from '@mdl/productos';
import { Salidas } from '@mdl/salidas';
import { ProductosService } from '@srv/productos.service';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css'],
})
export class SalidasComponent implements OnInit {
  frmSalidas: FormGroup;
  listaProductos: Productos[] = [];
  tablaItems: Salidas[] = [];
  totalGeneral: number = 0;
  hayItems: boolean = false;

  constructor(
    private prdServ: ProductosService,
    private salServ: SalidasService
    ) {
    this.frmSalidas = new FormGroup({
      refFactura: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      idProducto: new FormControl(''),
      nombreProducto: new FormControl(''),
      precioUnitario: new FormControl(0),
      precioNuevo: new FormControl(0),
      cantidadActual: new FormControl(0),
      cantidadSalida: new FormControl(0, [Validators.required]),
      cantidadNueva: new FormControl(0),
      importeTotal: new FormControl(0),
    });
    // Calcular subtotal de linea
    this.frmSalidas.get('precioNuevo')?.valueChanges.subscribe((dato) => {
      let cantSal = this.frmSalidas.get('cantidadSalida')?.value;
      let precio1 = this.frmSalidas.get('precioUnitario')?.value;
      let precio2 = this.frmSalidas.get('precioNuevo')?.value;
      if (precio1 < precio2) {
        this.frmSalidas.patchValue({ importeTotal: cantSal * precio2 });
      } else {
        this.frmSalidas.patchValue({ importeTotal: cantSal * precio1 });
      }});
    this.frmSalidas.get('cantidadSalida')?.valueChanges.subscribe((dato)=>{
      let precio1 = this.frmSalidas.get('precioUnitario')?.value;
      let precio2 = this.frmSalidas.get('precioNuevo')?.value;
      let cantSal = this.frmSalidas.get('cantidadSalida')?.value;
      let cantExi = this.frmSalidas.get('cantidadActual')?.value;
      this.frmSalidas.patchValue({ cantidadNueva: parseFloat(cantExi) - parseFloat(cantSal)})
      if( precio2 > precio1) {
         this.frmSalidas.patchValue({ importeTotal: precio2 * cantSal});
      } else {
         this.frmSalidas.patchValue({ importeTotal: precio1 * cantSal});
      }
    });
    this.frmSalidas.get('nombreProducto')?.valueChanges.subscribe(async (dato) => {
      // aca iria el filtro para que ponga el precio unitario del producto
      const prodBuscado = await this.prdServ.obtenerProducto(this.frmSalidas.get('nombreProducto')?.value);
      this.frmSalidas.patchValue({ precioUnitario: prodBuscado.precio_vp});
      this.frmSalidas.patchValue({ cantidadActual: prodBuscado.stock});
      this.frmSalidas.patchValue({ idProducto: prodBuscado.id })
    });
  }

  ngOnInit(): void {
    this.prdServ.obtenerProductos().subscribe((datos) => {
      this.listaProductos = datos;
    });
  }

  agregarItem(dato: any) {
    this.tablaItems.push(dato);
    this.totalGeneral = this.totalGeneral + dato.importeTotal;
    this.hayItems = true;
  }

  ingresarTotal() {
    this.tablaItems.forEach((x) => {
      this.salServ.agregaSalida(x);
      let cantModificar = x.cantidadSalida + this.frmSalidas.get('cantidadActual')?.value
      if (x.importeTotal < x.precioNuevo) {
        this.prdServ.modificarProducto(x.idProducto, x.cantidadNueva, x.precioNuevo)
      } else {
        this.prdServ.modificarProducto(x.idProducto, x.cantidadNueva, x.importeTotal)
      }
      this.tablaItems = [];
      this.hayItems = false;
      this.frmSalidas.reset();
    });
  }
}
