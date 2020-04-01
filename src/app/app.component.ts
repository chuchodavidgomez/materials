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
    { url: '/list', nombre: 'list'},
    { url: '/grid', nombre: 'grid'},
    { url: '/expansion', nombre: 'expansion'},
    { url: '/card', nombre: 'card'},
    { url: '/tabs', nombre: 'tabs'},
    { url: '/stepper', nombre: 'steper'},
    { url: '/input', nombre: 'input'},
    { url: '/select', nombre: 'select'},
    { url: '/autocomplete', nombre: 'autocomplete'},
    { url: '/checkbox', nombre: 'checkbox'}
  ];

  public companies2: Item[] = [
    { url: '/datepicker', nombre: 'datepicker'},
    { url: '/tooltip', nombre: 'tooltip'},
    { url: '/snackbar', nombre: 'snackbar'},
    { url: '/dialogs', nombre: 'dialogs'},
    { url: '/datatable', nombre: 'datatable'},
    { url: '/scrolling', nombre: 'scrolling'}
  ];

}
