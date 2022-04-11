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

  search(termino: string){
   this.unError = false
   this.termino = termino;
   this.countryService.searchCountry(termino)
    .subscribe( {
      next: (resp)=>{ this.countries = resp },
      error: (err) =>{this.unError = true, this.countries = [] },
    } );
  }

  suggestions(termino: string){
    this.unError = false;
    
  };
  
}
