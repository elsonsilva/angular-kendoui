import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandesNumerosComponent } from './grandes-numeros.component';

describe('GrandesNumerosComponent', () => {
  let component: GrandesNumerosComponent;
  let fixture: ComponentFixture<GrandesNumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandesNumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandesNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
