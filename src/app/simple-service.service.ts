import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimpleServiceService {
  value: number;

  constructor() {
    this.value = Math.random();
  }
}
