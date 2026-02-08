import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise10Component } from './practise10.component';

describe('Practise10Component', () => {
  let component: Practise10Component;
  let fixture: ComponentFixture<Practise10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
