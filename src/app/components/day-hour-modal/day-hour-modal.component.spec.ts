import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayHourModalComponent } from './day-hour-modal.component';

describe('DayHourModalComponent', () => {
  let component: DayHourModalComponent;
  let fixture: ComponentFixture<DayHourModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayHourModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayHourModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
