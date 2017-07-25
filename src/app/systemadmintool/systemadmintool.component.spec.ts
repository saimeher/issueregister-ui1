import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemadmintoolComponent } from './systemadmintool.component';

describe('SystemadmintoolComponent', () => {
  let component: SystemadmintoolComponent;
  let fixture: ComponentFixture<SystemadmintoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemadmintoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemadmintoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
