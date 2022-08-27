import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Rubros } from 'src/app/modelos/rubros';
import { RubrosService } from 'src/app/servicios/rubros.service';

@Component({
  selector: 'app-rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.css'],
})
export class RubrosComponent implements OnInit {
  frmRubros: FormGroup;
  rubros: Rubros[] = [];
  modificar: boolean = false;

  constructor(private rubrosService: RubrosService) {
    this.frmRubros = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.rubrosService.listarRubros().subscribe((listaRubros) => {
      this.rubros = listaRubros;
    });
  }

  eliminarRubro(rubro: Rubros) {
    console.log(rubro);
    if (confirm('¿Está seguro de eliminar el rubro?')) {
      this.rubrosService.borrarRubro(rubro);
    }
  }

  editarRubro(rubro: Rubros) {
    this.modificar = true;
    this.frmRubros.patchValue(rubro);
  }

  modificarRubro(rubro: Rubros) {
    if (confirm('¿Está seguro de modificar el rubro?')) {
      const id = rubro.id;
      const nombre = rubro.nombre;
      this.rubrosService.editarRubro(rubro);
    }
    this.modificar = false;
    this.frmRubros.reset();
  }

  agregarRubro(dato: Rubros) {
    this.rubrosService.agregarRubro(dato);
    this.frmRubros.reset();
  }

  cancelar() {
    this.frmRubros.reset();
    this.modificar = false;
  }
}
