import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore, 
} from '@angular/fire/firestore';
import { Salidas } from '@mdl/salidas';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class SalidasService {
  docBusqueda: any = [];
  constructor(private fs: Firestore, private ps: ProductosService) { }

  // Agrega un producto en la salida con todo el registro
  agregaSalida(salida: Salidas) {
    const prodRef = collection(this.fs, 'salidas');
    return addDoc(prodRef, salida);
  }

}
