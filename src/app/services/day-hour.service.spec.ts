import { TestBed } from '@angular/core/testing';

import { DayHourService } from './day-hour.service';

describe('DayHourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DayHourService = TestBed.get(DayHourService);
    expect(service).toBeTruthy();
  });
});
