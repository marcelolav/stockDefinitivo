export interface Ingresos {
    id?: string,
    refFactura: string,
    fecha: Date,
    idProducto: string,
    nombreProducto: string, 
    precioUnitario: number,
    precioNuevo: number,
    cantidadActual: number,
    cantidadIngreso: number,
    cantidadNueva: number,
    importeTotal: number
}
