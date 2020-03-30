import { Component } from '@angular/core';
import { Item } from '@ceiba/navbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-base';
  public companies: Item[] = [
    { url: '/typography', nombre: 'typography' },
    { url: '/producto', nombre: 'producto' },
    { url: '/button', nombre: 'button' },
    { url: '/button-toggle', nombre: 'button-toggle' },
    { url: '/icons', nombre: 'icons' },
    { url: '/badges', nombre: 'badges' },
    { url: '/progress-spinner', nombre: 'progress-spinner' },
    { url: '/mattoolbar', nombre: 'toolbar' },
    { url: '/matsidenav', nombre: 'sidenav' },
    { url: '/matmenu', nombre: 'menu'},
    { url: '/list', nombre: 'list'}
  ];


}
