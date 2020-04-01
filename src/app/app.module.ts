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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TooltipComponent } from './feature/tooltip/tooltip.component';
import { SnackbarComponent } from './feature/snackbar/snackbar.component';
import { DialogsComponent } from './feature/dialogs/dialogs.component';
import { DialogExampleComponent } from './feature/dialog-example/dialog-example.component';
import { DatatableComponent } from './feature/datatable/datatable.component';
import { ScrollingComponent } from './feature/scrolling/scrolling.component';

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
    ListComponent,
    GridComponent,
    ExpansionComponent,
    CardComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    TooltipComponent,
    SnackbarComponent,
    DialogsComponent,
    DialogExampleComponent,
    DatatableComponent,
    ScrollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
