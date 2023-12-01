import { TestBed } from '@angular/core/testing';

import { AngularFestivosService } from './angular-festivos.service';

describe('AngularFestivosService', () => {
  let service: AngularFestivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularFestivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
