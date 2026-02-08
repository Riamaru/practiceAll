import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise11Component } from './practise11.component';

describe('Practise11Component', () => {
  let component: Practise11Component;
  let fixture: ComponentFixture<Practise11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
