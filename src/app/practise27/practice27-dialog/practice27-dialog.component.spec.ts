import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice27DialogComponent } from './practice27-dialog.component';

describe('Practice27DialogComponent', () => {
  let component: Practice27DialogComponent;
  let fixture: ComponentFixture<Practice27DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice27DialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice27DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
