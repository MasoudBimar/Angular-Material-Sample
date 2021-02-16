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
import { DialogComponent } from './dialog/dialog.component';

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
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
