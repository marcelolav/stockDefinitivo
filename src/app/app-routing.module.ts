import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes para las rutas
import { CotizacionesComponent } from '@com/cotizaciones/cotizaciones.component';
import { IngresosComponent } from '@com/ingresos/ingresos.component';
import { ProductosComponent } from '@com/productos/productos.component';
import { RubrosComponent } from '@com/rubros/rubros.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'rubros', component: RubrosComponent},
  {path: 'cotizaciones', component: CotizacionesComponent},
  {path: 'ingresos', component: IngresosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
