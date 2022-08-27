export interface Ingresos {
    id?: string,
    refFactura: string,
    fecha: Date,
    idProducto: string,
    nombreProducto: string, 
    precioUnitario: number,
    cantidad: number,
    importeTotal: number
}
