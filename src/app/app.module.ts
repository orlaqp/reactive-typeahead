import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImperativeTypeaheadComponent } from './imperative-typeahead/imperative-typeahead.component';
import { ImperativeDataService } from './imperative-typeahead/imperative-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ImperativeTypeaheadComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ImperativeDataService]
})
export class AppModule { }
