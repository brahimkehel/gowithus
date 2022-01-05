import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  animations:[
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class AcceuilComponent implements OnInit {
  depart_control = new FormControl();
  arrive_control = new FormControl();
  villes=['rabat','casa']
  filteredDeparts?: Observable<string[]>;
  filteredArrives?: Observable<string[]>;
  
  constructor() { }

  ngOnInit(): void {
    this.filteredDeparts = this.depart_control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.filteredArrives = this.arrive_control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.villes.filter(v => this._normalizeValue(v).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
