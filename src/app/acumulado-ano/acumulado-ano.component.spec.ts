import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcumuladoAnoComponent } from './acumulado-ano.component';

describe('AcumuladoAnoComponent', () => {
  let component: AcumuladoAnoComponent;
  let fixture: ComponentFixture<AcumuladoAnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcumuladoAnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcumuladoAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
