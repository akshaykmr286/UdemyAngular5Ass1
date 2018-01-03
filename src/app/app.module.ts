import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningComponent } from './alerts/warning/warning.component';
import { InfoComponent } from './alerts/info/info.component';
import { DangerComponent } from './alerts/danger/danger.component';
/* self written custom component */
import { SuccessComponent } from "./alerts/success/success.component";

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    InfoComponent,
    DangerComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
