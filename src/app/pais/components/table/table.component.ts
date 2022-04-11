import { Country } from './../../interfaces/country-interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent{

  @Input() countries: Country[] = [];
 

}
