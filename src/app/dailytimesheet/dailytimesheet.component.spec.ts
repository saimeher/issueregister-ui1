import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytimesheetComponent } from './dailytimesheet.component';

describe('DailytimesheetComponent', () => {
  let component: DailytimesheetComponent;
  let fixture: ComponentFixture<DailytimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailytimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailytimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
