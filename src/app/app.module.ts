import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PhotoDisplayComponent } from './photo-display/photo-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
