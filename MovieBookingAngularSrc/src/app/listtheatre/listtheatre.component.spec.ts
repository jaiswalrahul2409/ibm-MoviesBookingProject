import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtheatreComponent } from './listtheatre.component';

describe('ListtheatreComponent', () => {
  let component: ListtheatreComponent;
  let fixture: ComponentFixture<ListtheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
