import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorMesComponent } from './monitor-mes.component';

describe('MonitorMesComponent', () => {
  let component: MonitorMesComponent;
  let fixture: ComponentFixture<MonitorMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
