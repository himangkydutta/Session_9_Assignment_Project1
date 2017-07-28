import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { MovieComponent } from './movie-app.component';
import {CustDirective} from './Directive/custom-directives'

@NgModule({
  declarations: [
    MovieComponent,
    CustDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MovieComponent]
})
export class AppModule { }
