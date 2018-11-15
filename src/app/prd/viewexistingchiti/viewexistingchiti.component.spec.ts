import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexistingchitiComponent } from './viewexistingchiti.component';

describe('ViewexistingchitiComponent', () => {
  let component: ViewexistingchitiComponent;
  let fixture: ComponentFixture<ViewexistingchitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexistingchitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexistingchitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
