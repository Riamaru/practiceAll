import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise15Component } from './practise15.component';

describe('Practise15Component', () => {
  let component: Practise15Component;
  let fixture: ComponentFixture<Practise15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
