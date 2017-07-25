import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HroperationsComponent } from './hroperations.component';

describe('HroperationsComponent', () => {
  let component: HroperationsComponent;
  let fixture: ComponentFixture<HroperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HroperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HroperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
