import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice8Component1Component } from './practice8-component1.component';

describe('Practice8Component1Component', () => {
  let component: Practice8Component1Component;
  let fixture: ComponentFixture<Practice8Component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice8Component1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice8Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
