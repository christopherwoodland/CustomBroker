import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMGraphComponent } from './vm-graphs.component';

describe('TutorialDetailsComponent', () => {
  let component: VMGraphComponent;
  let fixture: ComponentFixture<VMGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
