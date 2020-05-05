import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerMonitorComponent } from './drawer-monitor.component';

describe('DrawerMonitorComponent', () => {
  let component: DrawerMonitorComponent;
  let fixture: ComponentFixture<DrawerMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
