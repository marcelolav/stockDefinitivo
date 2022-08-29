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
import { ListaItemsComponent } from './componentes/ingresos/lista-items.component';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    RubrosComponent,
    CotizacionesComponent,
    IngresosComponent,
    ListaItemsComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
