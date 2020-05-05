import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaisOntemComponent } from './totais-ontem.component';

describe('TotaisOntemComponent', () => {
  let component: TotaisOntemComponent;
  let fixture: ComponentFixture<TotaisOntemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaisOntemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaisOntemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
