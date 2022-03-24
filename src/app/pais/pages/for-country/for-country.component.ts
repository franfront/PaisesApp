import { Component } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from './../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
  ]
})
export class ForCountryComponent {

  termino: string = "";
  unError: boolean = false;
  countries: Country[] = [];
  constructor(private countryService: CountryService ){

  }

  search(){
   this.unError = false
   this.countryService.searchCountry(this.termino)
    .subscribe( {
      next: (resp)=>{console.log(resp), this.countries = resp },
      error: (err) =>{this.unError = true, this.countries = [] },
    } );
  }
  
}
