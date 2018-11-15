import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchitiComponent } from './addchiti.component';

describe('AddchitiComponent', () => {
  let component: AddchitiComponent;
  let fixture: ComponentFixture<AddchitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
