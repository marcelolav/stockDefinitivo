import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  doc,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { Ingresos } from '@app/modelos/ingresos';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root',
})
export class IngresosService {
  docBusqueda: any = [];
  constructor(private fs: Firestore, private ps: ProductosService) {}

  // Agrega un producto con todo el registro
  agregaIngreso(ingreso: Ingresos) {
    const prodRef = collection(this.fs, 'ingresos');
    return addDoc(prodRef, ingreso);
  }

  modificarProducto(id: string, stock: number, precio: number) {
    const modificar = {
      "precio_cp": precio,
      "stock": stock
    }
    this.ps.editarProducto(id, modificar);
  }

}
