import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcumuladoOntemComponent } from './acumulado-ontem.component';

describe('AcumuladoOntemComponent', () => {
  let component: AcumuladoOntemComponent;
  let fixture: ComponentFixture<AcumuladoOntemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcumuladoOntemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcumuladoOntemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
