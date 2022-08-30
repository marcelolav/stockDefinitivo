export interface Ingresos {
    id?: string,
    refFactura: string,
    fecha: Date,
    codigo_barra: string,
    nombreProducto: string, 
    precioUnitario: number,
    cantidad: number,
    importeTotal: number
}
