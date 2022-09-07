import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'

// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '@env/environment';

// Bootstrap desde modulo ngb
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Forms reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '@com/login/login.component';
import { ProductosComponent } from '@com/productos/productos.component';
import { RubrosComponent } from '@com/rubros/rubros.component';
import { CotizacionesComponent } from '@com/cotizaciones/cotizaciones.component';
import { IngresosComponent } from '@com/ingresos/ingresos.component';
import { SalidasComponent } from '@com/salidas/salidas.component';
import { ConsultaMovimientosComponent } from '@com/consulta-movimientos/consulta-movimientos.component';
import { ConsultaIngresosComponent } from './componentes/consulta-movimientos/ingresos/consultaingresos.component';
import { ConsultaSalidasComponent } from './componentes/consulta-movimientos/salidas/consultasalidas.component';

import { ConsultaStockComponent } from '@com/consulta-stock/consulta-stock.component';

import { ConsultaPreciosComponent } from '@com/consulta-precios/consulta-precios.component';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';  // Esta por futuros usos
import { FilterPipe } from '@app/pipes/filter-pipe' ;
// Servicios
import { ProductosService } from '@srv/productos.service';
import { RubrosService } from '@srv/rubros.service';
import { LoginService } from '@srv/login.service';
import { OrderPipe } from './pipes/order.pipe';
import { FiltroNombreProductoPipe } from './pipes/filtro-nombre-producto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    RubrosComponent,
    CotizacionesComponent,
    IngresosComponent,
    KeysPipe,
    FilterPipe,
    LoginComponent,
    SalidasComponent,
    ConsultaMovimientosComponent,
    ConsultaIngresosComponent,
    ConsultaSalidasComponent,
    ConsultaStockComponent,
    ConsultaPreciosComponent,
    OrderPipe,
    FiltroNombreProductoPipe
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    CommonModule, 
    ToastrModule.forRoot(), NgbModule, // ToastrModule added
  ],
  providers: [ProductosService, RubrosService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
