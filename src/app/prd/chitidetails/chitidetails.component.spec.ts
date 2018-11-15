import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitidetailsComponent } from './chitidetails.component';

describe('ChitidetailsComponent', () => {
  let component: ChitidetailsComponent;
  let fixture: ComponentFixture<ChitidetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitidetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
