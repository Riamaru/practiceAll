import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise28Component } from './practise28.component';

describe('Practise28Component', () => {
  let component: Practise28Component;
  let fixture: ComponentFixture<Practise28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise28Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
