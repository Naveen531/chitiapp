import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitimonthwiseComponent } from './chitimonthwise.component';

describe('ChitimonthwiseComponent', () => {
  let component: ChitimonthwiseComponent;
  let fixture: ComponentFixture<ChitimonthwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitimonthwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitimonthwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
