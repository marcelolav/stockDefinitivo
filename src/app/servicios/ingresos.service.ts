import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  getDocs,
  orderBy,
  query,
} from '@angular/fire/firestore';
import { Ingresos } from '@app/modelos/ingresos';
import { Observable } from 'rxjs';
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
  // Envia todos los ingresos registrados a un array de productos
  obtenerIngresos(): Observable<Ingresos[]> {
    const prodRef = collection(this.fs, 'ingresos');
    return collectionData(prodRef, { idField: 'id' }) as Observable<Ingresos[]>;
  }
}
