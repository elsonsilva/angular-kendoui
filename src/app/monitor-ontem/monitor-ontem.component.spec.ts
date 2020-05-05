import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorOntemComponent } from './monitor-ontem.component';

describe('MonitorOntemComponent', () => {
  let component: MonitorOntemComponent;
  let fixture: ComponentFixture<MonitorOntemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorOntemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorOntemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
