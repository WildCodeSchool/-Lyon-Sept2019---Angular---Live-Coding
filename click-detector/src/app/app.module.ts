import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickComponent } from './click/click.component';
import { DisplayCounterComponent } from './display-counter/display-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickComponent,
    DisplayCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
