import { Country } from './../../interfaces/country-interface';

import { Component, Input, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { CountryService } from './../../services/country.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [],
})
export class SeeCountryComponent implements OnInit {
  
  @Input() pais: Country[] = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
  

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.countryService.getCountryForId(id)),
      tap(console.log)
      )
    .subscribe(pais => this.pais = pais);
    
    
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.countryService.getCountryForId(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
