import { Component, OnInit, Input } from '@angular/core';
import { ImperativeDataService } from './imperative-data.service';
import { ICountry, countries } from '../countries';

@Component({
  selector: 'app-imperative-typeahead',
  templateUrl: './imperative-typeahead.component.html',
  styleUrls: ['./imperative-typeahead.component.css']
})
export class ImperativeTypeaheadComponent {
  @Input()
  async = false;

  public filteredCountries: ICountry[];

  constructor(private dataService: ImperativeDataService) {
    this.filteredCountries = countries;
  }

  filterData(event) {
    const criteria = event.target.value;

    if (this.async) {
      this.dataService.filterAsync(criteria)
        .then((res: any[]) => this.filteredCountries = res)
    }
    else {
      this.filteredCountries = this.dataService.filter(criteria);
    }
  }
  
}