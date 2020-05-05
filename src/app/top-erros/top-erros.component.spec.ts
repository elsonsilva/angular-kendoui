import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopErrosComponent } from './top-erros.component';

describe('TopErrosComponent', () => {
  let component: TopErrosComponent;
  let fixture: ComponentFixture<TopErrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopErrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
