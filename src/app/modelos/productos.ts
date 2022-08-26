export interface Productos {
    id?: string;
    codigo_barra: string;
    nombre: string;
    precio_cd: number;
    precio_cp: number;
    precio_vd: number;
    precio_vp: number;
    rubro: string;
    stock: number;
    minimo: number;
}
