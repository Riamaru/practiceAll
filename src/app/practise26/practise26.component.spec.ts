import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise26Component } from './practise26.component';

describe('Practise26Component', () => {
  let component: Practise26Component;
  let fixture: ComponentFixture<Practise26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
