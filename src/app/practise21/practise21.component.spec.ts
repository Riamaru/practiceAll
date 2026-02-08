import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise21Component } from './practise21.component';

describe('Practise21Component', () => {
  let component: Practise21Component;
  let fixture: ComponentFixture<Practise21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
