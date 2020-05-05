import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcumuladoMesComponent } from './acumulado-mes.component';

describe('AcumuladoMesComponent', () => {
  let component: AcumuladoMesComponent;
  let fixture: ComponentFixture<AcumuladoMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcumuladoMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcumuladoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
