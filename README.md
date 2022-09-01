# StockDefinitivo
Sistema de control de inventario realizado en Angular [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.
Este sistema se apoya en la base de datos de Firestore (V9) y @angular/fire por lo que requiere archivo de configuracion en 
la carpeta src/app/environments el cual debe ser generado con vuestras propias credenciales proporcionadas por Firestore/Firebase de Google

El archivo es similar a esto:

`
export const environment = {
    production: false,
    firebase: {
      projectId: 'xxxxxx',
      appId: 'xxxxxx',
      storageBucket: 'xxxxxx',
      locationId: 'us-central',
      apiKey: 'xxxxxx',
      authDomain: 'xxxxxx',
      messagingSenderId: 'xxxxxx',
      measurementId: 'xxxxxx',
    }
  }
`

donde evidentemente las `xxxxxx`  son las credenciales proporcionadas por Google desde:  [Firebase](https://firebase.google.com/) Aqui se debe crear una cuenta y
realizar los pasos de la ayuda que se requieran por página.

## Pre-Requisitos

Se debe instalar NodeJS y de forma global (para desarrollos) el @angular/cli

## Notas para desarrollo

`ng serve` Inicia el servidor para desarrollo.  Navegar dentro de `http://localhost:4200/`.  Los cambios que se realicen se recargaran automáticamente en el servidor de desarrollo

## Scaffolding

`ng generate component component-name` genera un nuevo componente.
`ng generate service service-name` genera un nuevo servicio.
`ng generate interface interface-name` genera un nuevo interface. y asi...

 Se pueden usar los comandos siguientes `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build del proyecto

Ejecutar `ng build`. Todo el codigo del build se guarda en la carpeta `dist/`.

## Mas ayuda y contacto con desarrollador

Página de referencia del CLI de angular [Angular CLI Overview and Command Reference](https://angular.io/cli).
Página de referencia del lenguaje [Angular](https://angular.io)
Página de referencia de [NodeJS](https://nodejs.org/en/) 

Mail del autor:  [Marcelo Lavandeira](mailto:marcelo.lavandeira@gmail.com)
