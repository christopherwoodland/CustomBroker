import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMConfigurationComponent } from './vm-configuration.component';

describe('TutorialDetailsComponent', () => {
  let component: VMConfigurationComponent;
  let fixture: ComponentFixture<VMConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
