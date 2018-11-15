import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberchitiperformanceComponent } from './memberchitiperformance.component';

describe('MemberchitiperformanceComponent', () => {
  let component: MemberchitiperformanceComponent;
  let fixture: ComponentFixture<MemberchitiperformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberchitiperformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberchitiperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
