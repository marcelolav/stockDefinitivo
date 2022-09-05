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
// Forms reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from '@com/productos/productos.component';
import { RubrosComponent } from '@com/rubros/rubros.component';
import { CotizacionesComponent } from '@com/cotizaciones/cotizaciones.component';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import { LoginComponent } from './componentes/login/login.component';
// Pipes
import { KeysPipe } from './pipes/keys.pipe';  // Esta por futuros usos
// Servicios
import { ProductosService } from './servicios/productos.service';
import { RubrosService } from './servicios/rubros.service';
import { LoginService } from './servicios/login.service';
import { SalidasComponent } from './componentes/salidas/salidas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    RubrosComponent,
    CotizacionesComponent,
    IngresosComponent,
    KeysPipe,
    LoginComponent,
    SalidasComponent
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
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [ProductosService, RubrosService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
