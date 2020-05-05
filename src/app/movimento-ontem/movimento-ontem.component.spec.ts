import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentoOntemComponent } from './movimento-ontem.component';

describe('MovimentoOntemComponent', () => {
  let component: MovimentoOntemComponent;
  let fixture: ComponentFixture<MovimentoOntemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentoOntemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentoOntemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
