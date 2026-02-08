import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise3Component } from './practise3.component';

describe('Practise3Component', () => {
  let component: Practise3Component;
  let fixture: ComponentFixture<Practise3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
