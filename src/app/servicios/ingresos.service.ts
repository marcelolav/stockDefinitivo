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

@Injectable({
  providedIn: 'root',
})
export class IngresosService {
  constructor(private fs: Firestore) {}

  // Agrega un producto con todo el registro
  agregaIngreso(ingreso: Ingresos) {
    const prodRef = collection(this.fs, 'ingresos');
    return addDoc(prodRef, ingreso);
  }

  // Modificar cantidad del producto sumando la entrada a lo que existe en base al producto
  async modificaCantidad(nombre: string, cantidad: number) {
    const docRef = collection(this.fs,"ingresos");
    const q = query(docRef, where("nombre", "==", nombre));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach(docSnap => {
      console.log(docSnap);
  })
  }
}
