import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrosOntemComponent } from './erros-ontem.component';

describe('ErrosOntemComponent', () => {
  let component: ErrosOntemComponent;
  let fixture: ComponentFixture<ErrosOntemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrosOntemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrosOntemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
