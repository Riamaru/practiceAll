import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice8Component2Component } from './practice8-component2.component';

describe('Practice8Component2Component', () => {
  let component: Practice8Component2Component;
  let fixture: ComponentFixture<Practice8Component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice8Component2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice8Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
