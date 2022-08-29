import { Component, OnInit, Input } from '@angular/core';
import { Ingresos } from '@app/modelos/ingresos';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit {

  @Input() recibido: any;

   constructor() { }

  ngOnInit(): void { }
  
}
