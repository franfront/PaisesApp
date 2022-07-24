import { Country } from './../interfaces/country-interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: String = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountry(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
  };

  searchCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url);
  };

  getCountryForId(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  searchRegion(region: string): Observable<Country[]>{

    const httpParams = new HttpParams()
    const parametrosHttp = new HttpParams()
    .set('field', 'name')
    .set('field', 'capital')
    .set('field', 'population')

    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, {params: httpParams})
            .pipe(
              tap(console.log)
            )
  }

}
