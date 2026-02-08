import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise33Component } from './practise33.component';

describe('Practise33Component', () => {
  let component: Practise33Component;
  let fixture: ComponentFixture<Practise33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise33Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
