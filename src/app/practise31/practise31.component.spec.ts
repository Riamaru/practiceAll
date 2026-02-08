import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise31Component } from './practise31.component';

describe('Practise31Component', () => {
  let component: Practise31Component;
  let fixture: ComponentFixture<Practise31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
