import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreselectComponent } from './theatreselect.component';

describe('TheatreselectComponent', () => {
  let component: TheatreselectComponent;
  let fixture: ComponentFixture<TheatreselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatreselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
