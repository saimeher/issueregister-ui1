import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdashboardComponent } from './prodashboard.component';

describe('ProdashboardComponent', () => {
  let component: ProdashboardComponent;
  let fixture: ComponentFixture<ProdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
