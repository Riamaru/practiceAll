import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise27Component } from './practise27.component';

describe('Practise27Component', () => {
  let component: Practise27Component;
  let fixture: ComponentFixture<Practise27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise27Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
