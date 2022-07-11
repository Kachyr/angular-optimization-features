import { Component } from '@angular/core';
import { SimpleServiceService } from '../../simple-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // providers: [SimpleServiceService],
  // viewProviders: [SimpleServiceService],
})
export class ChildComponent {
  localValue: number;
  constructor(private simpleService: SimpleServiceService) {
    this.localValue = this.simpleService.value;
  }
}
