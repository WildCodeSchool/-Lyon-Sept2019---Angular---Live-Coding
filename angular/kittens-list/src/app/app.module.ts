import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddKittenComponent } from './add-kitten/add-kitten.component';
import { KittensListComponent } from './kittens-list/kittens-list.component';
import { KittenComponent } from './kitten/kitten.component';

@NgModule({
  declarations: [
    AppComponent,
    AddKittenComponent,
    KittensListComponent,
    KittenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
