import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'
// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '@env/environment';
// Forms reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from '@com/productos/productos.component';
import { RubrosComponent } from '@com/rubros/rubros.component';
import { CotizacionesComponent } from '@com/cotizaciones/cotizaciones.component';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
// Pipes
import { KeysPipe } from './pipes/keys.pipe';
// Servicios
import { CotizacionesService } from './servicios/cotizaciones.service';
import { ProductosService } from './servicios/productos.service';
import { RubrosService } from './servicios/rubros.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    RubrosComponent,
    CotizacionesComponent,
    IngresosComponent,
    KeysPipe
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    CommonModule
  ],
  providers: [CotizacionesService, ProductosService, RubrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
