import { Component, OnInit } from '@angular/core';
import { Rubros } from 'src/app/modelos/rubros';
import { RubrosService } from 'src/app/servicios/rubros.service';

@Component({
  selector: 'app-rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.css'],
})
export class RubrosComponent implements OnInit {
  rubros: Rubros[] = [];
  modificar: boolean = false;
  rubrosModelo: Rubros = {
    nombre: '',
  };

  constructor(private rubrosService: RubrosService) {}

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
    this.rubrosModelo = {
      id: rubro.id,
      nombre: rubro.nombre,
    };
  }

  modificarRubro(rubro: Rubros) {
    if (confirm('¿Está seguro de modificar el rubro?')) {
      const id = rubro.id;
      const nombre = rubro.nombre;
      this.rubrosService.editarRubro(rubro);
    }
    this.modificar = false;
    this.rubrosModelo = {
      nombre: '',
    };
  }

  agregarRubro(dato: Rubros) {
    this.rubrosService.agregarRubro(dato);

    this.rubrosModelo = {
      nombre: '',
    };
  }

  cancelar() {
    this.rubrosModelo = {
      nombre: '',
    };
    this.modificar = false;
  }
}
