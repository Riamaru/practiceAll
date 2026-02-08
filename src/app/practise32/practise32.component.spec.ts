import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise32Component } from './practise32.component';

describe('Practise32Component', () => {
  let component: Practise32Component;
  let fixture: ComponentFixture<Practise32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise32Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
