import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtituloOntemComponent } from './subtitulo-ontem.component';

describe('SubtituloOntemComponent', () => {
  let component: SubtituloOntemComponent;
  let fixture: ComponentFixture<SubtituloOntemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtituloOntemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtituloOntemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
