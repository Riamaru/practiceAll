import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise9Component } from './practise9.component';

describe('Practise9Component', () => {
  let component: Practise9Component;
  let fixture: ComponentFixture<Practise9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
