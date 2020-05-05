import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorAnoComponent } from './monitor-ano.component';

describe('MonitorAnoComponent', () => {
  let component: MonitorAnoComponent;
  let fixture: ComponentFixture<MonitorAnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorAnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
