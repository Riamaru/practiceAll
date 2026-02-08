import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise111Component } from './practise11-1.component';

describe('Practise111Component', () => {
  let component: Practise111Component;
  let fixture: ComponentFixture<Practise111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise111Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
