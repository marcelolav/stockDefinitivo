export interface Salidas {
    id?: string,
    refFactura: string,
    fecha: Date,
    idProducto: string,
    nombreProducto: string, 
    precioUnitario: number,
    precioNuevo: number,
    cantidadActual: number,
    cantidadSalida: number,
    cantidadNueva: number,
    importeTotal: number
}
