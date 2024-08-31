import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckBoxComponent } from './check-box/check-box.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { IconsComponent } from './icons/icons.component';
import { ButtonComponent } from './button/button.component';
import { ChipComponent } from './chip/chip.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TabComponent } from './tab/tab.component';
import { DialogComponent, DialogOverviewExampleDialog } from './dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    SelectComponent,
    InputComponent,
    TextAreaComponent,
    DatePickerComponent,
    IconsComponent,
    ButtonComponent,
    ChipComponent,
    ProgressSpinnerComponent,
    TooltipComponent,
    TabComponent,
    DialogComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
