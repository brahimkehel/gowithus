import { Component, OnInit } from '@angular/core';
import {ConducteurService} from "../services/conducteur.service";

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.component.html',
  styleUrls: ['./trajets.component.css']
})
export class TrajetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
