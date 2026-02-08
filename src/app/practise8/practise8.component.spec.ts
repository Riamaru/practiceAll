import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise8Component } from './practise8.component';

describe('Practise8Component', () => {
  let component: Practise8Component;
  let fixture: ComponentFixture<Practise8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
