import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'NOAA-Custom-Broker';

  constructor(private iconRegistry: MatIconModule, private sanitizer: DomSanitizer) { }
  ngAfterViewInit() {
    //DO SOMETHING
  }
}