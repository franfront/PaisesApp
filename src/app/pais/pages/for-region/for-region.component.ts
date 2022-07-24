import { CountryService } from './../../services/country.service';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country-interface';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ForRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActive: string = '';

  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getClaseCSS(region: string): string {
    return region === this.regionActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    if (region === this.regionActive){return;}
    this.regionActive = region;
    this.countries = [];

    this.countryService.searchRegion(region)
      .subscribe(paises => this.countries = paises)
  }
}
