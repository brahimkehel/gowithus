import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from "../../models/annonce";

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent implements OnInit {
  @Input() annonce :Annonce=new Annonce();

  constructor() { }

  ngOnInit(): void {
  }

}
