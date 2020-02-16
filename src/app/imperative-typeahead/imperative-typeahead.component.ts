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

  currentSearch = null;
  lastSearch = null;
  private delay = 500;
  private timeInterval = null;

  public filteredCountries: ICountry[];

  constructor(private dataService: ImperativeDataService) {
    this.filteredCountries = countries;
  }

  debounceTimeSearch(event) {
    this.currentSearch = event.target.value;

    if (!this.timeInterval) {
      this.timeInterval = setInterval(() => {
        if (this.currentSearch == this.lastSearch) {
          return this.stopInterval();
        }

        this.filterData(this.currentSearch);
        this.lastSearch = this.currentSearch;
        this.stopInterval();
        
      }, this.delay);
    }
  }

  private filterData(criteria) {
    this.dataService.filterAsync(criteria)
        .then((res: any[]) => this.filteredCountries = res);    
  }

  private stopInterval() {
    clearInterval(this.timeInterval);
    this.timeInterval = null;
  }
  
}