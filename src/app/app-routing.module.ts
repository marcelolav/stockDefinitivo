import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Autenticacion de firebase
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

// Componentes para las rutas
import { CotizacionesComponent } from '@com/cotizaciones/cotizaciones.component';
import { IngresosComponent } from '@com/ingresos/ingresos.component';
import { ProductosComponent } from '@com/productos/productos.component';
import { RubrosComponent } from '@com/rubros/rubros.component';
import { LoginComponent } from '@com/login/login.component';
import { SalidasComponent } from '@com/salidas/salidas.component';
import { ConsultaMovimientosComponent } from '@com/consulta-movimientos/consulta-movimientos.component';
import { ConsultaStockComponent } from '@com/consulta-stock/consulta-stock.component';
import { ConsultaPreciosNombreComponent } from '@com/consulta-precios-nombre/consulta-precios-nombre.component';
import { ConsultaPreciosCodigoComponent } from '@com/consulta-precios-codigo/consulta-precios-codigo.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'productos', component: ProductosComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path: 'rubros', component: RubrosComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path: 'cotizaciones', component: CotizacionesComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path: 'ingresos', component: IngresosComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login'])) },
  {path: 'salidas', component: SalidasComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login'])) },
  {path: 'consultaMovimientos', component: ConsultaMovimientosComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login'])) },
  {path: 'consultaStock', component: ConsultaStockComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login'])) },
  {path: 'consultaPreciosNombre', component: ConsultaPreciosNombreComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login'])) },
  {path: 'consultaPreciosCodigo', component: ConsultaPreciosCodigoComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login'])) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
