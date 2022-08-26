import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Rubros } from '../modelos/rubros';
@Injectable({
  providedIn: 'root'
})
export class RubrosService {

  constructor(private firestore: Firestore) { }

  listarRubros(): Observable<Rubros[]>{
    const rubrosLista = collection(this.firestore, 'rubros');
    return collectionData(rubrosLista, {idField: 'id'}) as Observable<Rubros[]>
  }
  borrarRubro(dato:Rubros){
    // Eliminar segun concordancia del registro completo de rubro
    const rubroDocRef = doc(this.firestore, `rubros/${dato.id}`);
    return deleteDoc(rubroDocRef);
  }
  // Edita los datos de un producto particular en base a id pasado como parametro
  editarRubro(dato: Rubros){
    const idRef: string = dato.id!;
    const datoaCambiar ={
      nombre: dato.nombre
    }
    const docRef = doc(this.firestore,"rubros",idRef);
    updateDoc(docRef, datoaCambiar);
  }
  // Agregar Rubro en tabla de rubros
  agregarRubro(dato:Rubros) {
    const rubRef = collection(this.firestore, 'rubros');
    return addDoc(rubRef, dato);
  }
}
