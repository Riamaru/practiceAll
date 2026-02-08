import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise13Component } from './practise13.component';

describe('Practise13Component', () => {
  let component: Practise13Component;
  let fixture: ComponentFixture<Practise13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
