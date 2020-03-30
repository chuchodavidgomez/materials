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
  { path: 'producto', loadChildren: () => import('./feature/producto/producto.module').then(mod => mod.ProductoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
