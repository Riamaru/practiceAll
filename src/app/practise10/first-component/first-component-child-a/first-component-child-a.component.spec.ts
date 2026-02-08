import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentChildAComponent } from './first-component-child-a.component';

describe('FirstComponentChildAComponent', () => {
  let component: FirstComponentChildAComponent;
  let fixture: ComponentFixture<FirstComponentChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstComponentChildAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponentChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
