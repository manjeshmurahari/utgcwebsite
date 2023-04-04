import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Utgc2006Component } from './utgc2006.component';

describe('Utgc2006Component', () => {
  let component: Utgc2006Component;
  let fixture: ComponentFixture<Utgc2006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Utgc2006Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Utgc2006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
