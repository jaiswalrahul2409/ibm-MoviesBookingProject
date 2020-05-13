import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatselectComponent } from './seatselect.component';

describe('SeatselectComponent', () => {
  let component: SeatselectComponent;
  let fixture: ComponentFixture<SeatselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
