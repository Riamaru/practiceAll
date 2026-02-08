import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise18Component } from './practise18.component';

describe('Practise18Component', () => {
  let component: Practise18Component;
  let fixture: ComponentFixture<Practise18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
