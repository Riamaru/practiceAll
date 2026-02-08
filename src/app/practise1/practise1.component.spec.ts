import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise1Component } from './practise1.component';

describe('Practise1Component', () => {
  let component: Practise1Component;
  let fixture: ComponentFixture<Practise1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
