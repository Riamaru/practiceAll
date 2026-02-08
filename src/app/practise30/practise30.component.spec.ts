import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise30Component } from './practise30.component';

describe('Practise30Component', () => {
  let component: Practise30Component;
  let fixture: ComponentFixture<Practise30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise30Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
