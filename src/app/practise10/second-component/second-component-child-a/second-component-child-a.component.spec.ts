import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponentChildAComponent } from './second-component-child-a.component';

describe('SecondComponentChildAComponent', () => {
  let component: SecondComponentChildAComponent;
  let fixture: ComponentFixture<SecondComponentChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondComponentChildAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComponentChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
