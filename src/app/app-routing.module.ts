import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes para las rutas
import { CotizacionesComponent } from './componentes/cotizaciones/cotizaciones.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RubrosComponent } from './componentes/rubros/rubros.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'rubros', component: RubrosComponent},
  {path: 'cotizaciones', component: CotizacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
