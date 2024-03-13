import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMDetailsComponent } from './vm-details.component';

describe('TutorialDetailsComponent', () => {
  let component: VMDetailsComponent;
  let fixture: ComponentFixture<VMDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
