import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise29Component } from './practise29.component';

describe('Practise29Component', () => {
  let component: Practise29Component;
  let fixture: ComponentFixture<Practise29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise29Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
