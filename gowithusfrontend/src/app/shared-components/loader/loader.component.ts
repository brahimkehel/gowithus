import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe(value => this.isLoading = value);
  }

  isLoading = false;

  ngOnInit(): void {
  }

}
