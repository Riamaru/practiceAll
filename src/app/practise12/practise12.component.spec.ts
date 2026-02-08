import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise12Component } from './practise12.component';

describe('Practise12Component', () => {
  let component: Practise12Component;
  let fixture: ComponentFixture<Practise12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
