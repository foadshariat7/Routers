import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Notfound404Component } from './notfound-404.component';

describe('Notfound404Component', () => {
  let component: Notfound404Component;
  let fixture: ComponentFixture<Notfound404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Notfound404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Notfound404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
