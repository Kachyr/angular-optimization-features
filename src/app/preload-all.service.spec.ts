/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { CustomPreloading } from './preload-all.service';

describe('Service: PreloadAll', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomPreloading],
    });
  });

  it('should ...', inject([CustomPreloading], (service: CustomPreloading) => {
    expect(service).toBeTruthy();
  }));
});
