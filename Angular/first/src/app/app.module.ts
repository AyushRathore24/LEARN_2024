import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateFormatPipe } from './date-format.pipe';
import { FormsModule } from '@angular/forms';
import { IndianCurrencyPipe } from './indian-currency.pipe';
import { InputHighlightDirective } from './input-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
    IndianCurrencyPipe,
    InputHighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DateFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
