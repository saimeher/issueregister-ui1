import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickettoolingComponent } from './tickettooling.component';

describe('TickettoolingComponent', () => {
  let component: TickettoolingComponent;
  let fixture: ComponentFixture<TickettoolingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickettoolingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickettoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
