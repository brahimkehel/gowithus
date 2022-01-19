import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../services/loader.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe(value => this.isLoading = value);
  }

  isLoading = false;
  ngOnInit(): void {
  }
}
