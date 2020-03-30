import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TypographyComponent } from './feature/typography/typography.component';
import { ProductoModule } from './feature/producto/producto.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './feature/button/button.component';
import { ButtonToggleComponent } from './feature/button-toggle/button-toggle.component';
import { IconsComponent } from './feature/icons/icons.component';
import { BadgesComponent } from './feature/badges/badges.component';
import { ProgressSpinnerComponent } from './feature/progress-spinner/progress-spinner.component';
import { MattoolbarComponent } from './feature/mattoolbar/mattoolbar.component';
import { MatsidenavComponent } from './feature/matsidenav/matsidenav.component';
import { FormsModule } from '@angular/forms';
import { MatmenuComponent } from './feature/matmenu/matmenu.component';
import { ListComponent } from './feature/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    ButtonToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    MattoolbarComponent,
    MatsidenavComponent,
    MatmenuComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
