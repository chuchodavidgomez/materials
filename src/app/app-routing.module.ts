import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from './core/guard/security.guard';
import { TypographyComponent } from './feature/typography/typography.component';
import { ButtonComponent } from './feature/button/button.component';
import { ButtonToggleComponent } from './feature/button-toggle/button-toggle.component';
import { IconsComponent } from './feature/icons/icons.component';
import { BadgesComponent } from './feature/badges/badges.component';
import { ProgressSpinnerComponent } from './feature/progress-spinner/progress-spinner.component';
import { MattoolbarComponent } from './feature/mattoolbar/mattoolbar.component';
import { MatsidenavComponent } from './feature/matsidenav/matsidenav.component';
import { MatmenuComponent } from './feature/matmenu/matmenu.component';
import { ListComponent } from './feature/list/list.component';
import { GridComponent } from './feature/grid/grid.component';
import { ExpansionComponent } from './feature/expansion/expansion.component';
import { CardComponent } from './feature/card/card.component';
import { TabsComponent } from './feature/tabs/tabs.component';
import { StepperComponent } from './feature/stepper/stepper.component';
import { InputComponent } from './feature/input/input.component';
import { SelectComponent } from './feature/select/select.component';
import { AutocompleteComponent } from './feature/autocomplete/autocomplete.component';
import { CheckboxComponent } from './feature/checkbox/checkbox.component';
import { DatepickerComponent } from './feature/datepicker/datepicker.component';


const routes: Routes = [
  { path: '', redirectTo: '/typography', pathMatch: 'full' },
  { path: 'typography', component: TypographyComponent, canActivate: [SecurityGuard]  },
  { path: 'button', component: ButtonComponent, canActivate: [SecurityGuard]  },
  { path: 'button-toggle', component: ButtonToggleComponent, canActivate: [SecurityGuard]  },
  { path: 'icons', component: IconsComponent, canActivate: [SecurityGuard]  },
  { path: 'badges', component: BadgesComponent, canActivate: [SecurityGuard]  },
  { path: 'progress-spinner', component: ProgressSpinnerComponent, canActivate: [SecurityGuard]  },
  { path: 'mattoolbar', component: MattoolbarComponent, canActivate: [SecurityGuard]  },
  { path: 'matsidenav', component: MatsidenavComponent, canActivate: [SecurityGuard]  },
  { path: 'matmenu', component: MatmenuComponent, canActivate: [SecurityGuard]  },
  { path: 'list', component: ListComponent, canActivate: [SecurityGuard]  },
  { path: 'grid', component: GridComponent, canActivate: [SecurityGuard]  },
  { path: 'expansion', component: ExpansionComponent, canActivate: [SecurityGuard]  },
  { path: 'card', component: CardComponent, canActivate: [SecurityGuard]  },
  { path: 'tabs', component: TabsComponent, canActivate: [SecurityGuard]  },
  { path: 'stepper', component: StepperComponent, canActivate: [SecurityGuard]  },
  { path: 'input', component: InputComponent, canActivate: [SecurityGuard]  },
  { path: 'select', component: SelectComponent, canActivate: [SecurityGuard]  },
  { path: 'autocomplete', component: AutocompleteComponent, canActivate: [SecurityGuard]  },
  { path: 'checkbox', component: CheckboxComponent, canActivate: [SecurityGuard]  },
  { path: 'datepicker', component: DatepickerComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('./feature/producto/producto.module').then(mod => mod.ProductoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
