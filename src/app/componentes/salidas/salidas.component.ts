import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css'],
})
export class SalidasComponent implements OnInit {
  frmSalidas: FormGroup;

  constructor() {
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
    this.frmSalidas.get('cantidadSalida')?.valueChanges.subscribe()
  }

  ngOnInit(): void {}
}
