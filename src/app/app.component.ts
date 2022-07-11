import { Component, OnInit } from '@angular/core';
import { SimpleServiceService } from './simple-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-optimization-things';
  value: number;
  constructor(private simpleService: SimpleServiceService) {}

  ngOnInit() {
    this.value = this.simpleService.value;
  }
}
