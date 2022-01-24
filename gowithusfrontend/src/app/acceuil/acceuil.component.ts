import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {map, Observable, startWith} from 'rxjs';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ])
    ])
  ]
})
export class AcceuilComponent implements OnInit {
  depart_control = new FormControl();
  arrive_control = new FormControl();
  villes = []
  filteredDeparts?: Observable<string[]>;
  filteredArrives?: Observable<string[]>;

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.filteredDeparts = this.depart_control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.filteredArrives = this.arrive_control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.http.get<any[]>("assets/villes.json").subscribe({
      next: (res:any[]) => {
        // @ts-ignore
        res.forEach((v:any)=>this.villes.push(v.ville))
      },
      error: (err) => console.log(err)
    })
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.villes.filter(v => this._normalizeValue(v).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  searchByArgs(searchForm: any) {
    console.log(searchForm.value["date"])
    console.log(this.depart_control.value)
    console.log(this.arrive_control.value)
    this.router.navigate(['/trajets'], {
      queryParams: {
        'depart': this.depart_control.value,
        'arrive': this.arrive_control.value,
        'date': searchForm.value["date"]
      }
    });
  }
}
