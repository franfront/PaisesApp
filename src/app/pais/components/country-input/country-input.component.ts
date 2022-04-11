import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = "";

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))

      .subscribe((valor) => {
        this.onDebounce.emit(valor);
      });
  }
  search() {
    this.onEnter.emit(this.termino);
  }

  keyPress() {
    this.debouncer.next(this.termino);
  };
}
