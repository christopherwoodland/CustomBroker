import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'NOAA-Custom-Broker';

  constructor() { };

  ngAfterViewInit() {
    //DO SOMETHING
  }

}