import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Productos } from '@mdl/productos';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private fs:Firestore) { }
  // Agrega un producto con todo el registro
  agregaProducto(producto: Productos) {
    const prodRef = collection(this.fs, 'productos');
    return addDoc(prodRef, producto);
  }
  // Envia todos los productos a un array de productos
  obtenerProductos(): Observable<Productos[]>{
    const prodRef = collection(this.fs, 'productos');
    return collectionData(prodRef, {idField: 'id'}) as Observable<Productos[]>
  }
  // Eliminar producto (Pasar el registro completo)
  borrarProducto(producto:Productos) {
    const prodDocRef = doc(this.fs, `productos/${producto.id}`);
    return deleteDoc(prodDocRef);
  }
  // Edita los datos de un producto particular en base a id pasado como parametro
  editarProducto(id:string, datos: any){
    const docRef = doc(this.fs,"productos",id);
    updateDoc(docRef, datos);
  }
}
