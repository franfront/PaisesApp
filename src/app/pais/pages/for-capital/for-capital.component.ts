import { Component } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styles: [
  ]
})
export class ForCapitalComponent{

 termino: string = "";
  unError: boolean = false;
  countries: Country[] = [];
  constructor(private countryService: CountryService ){

  }

  search(termino: string){
   this.unError = false
   this.termino = termino;
   this.countryService.searchCapital(termino)
    .subscribe( {
      next: (resp)=>{this.countries = resp },
      error: (err) =>{this.unError = true, this.countries = [] },
    } );
  }


}
