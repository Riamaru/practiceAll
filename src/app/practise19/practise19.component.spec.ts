import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise19Component } from './practise19.component';

describe('Practise19Component', () => {
  let component: Practise19Component;
  let fixture: ComponentFixture<Practise19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practise19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
