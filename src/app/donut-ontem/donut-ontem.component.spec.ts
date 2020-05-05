import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutOntemComponent } from './donut-ontem.component';

describe('DonutOntemComponent', () => {
  let component: DonutOntemComponent;
  let fixture: ComponentFixture<DonutOntemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutOntemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutOntemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
