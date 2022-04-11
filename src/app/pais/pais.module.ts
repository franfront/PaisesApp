import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { TableComponent } from './components/table/table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';



@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    SeeCountryComponent,
    TableComponent,
    CountryInputComponent,
  ],
  exports:[
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    SeeCountryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class PaisModule { }
