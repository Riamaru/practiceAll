import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise6Component } from './practise6.component';

describe('Practise6Component', () => {
  let component: Practise6Component;
  let fixture: ComponentFixture<Practise6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
