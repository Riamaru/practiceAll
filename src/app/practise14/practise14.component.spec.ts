import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise14Component } from './practise14.component';

describe('Practise14Component', () => {
  let component: Practise14Component;
  let fixture: ComponentFixture<Practise14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
