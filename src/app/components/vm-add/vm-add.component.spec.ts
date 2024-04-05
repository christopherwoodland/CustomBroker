import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMAddComponent } from './vm-add.component';

describe('VMAddComponent', () => {
  let component: VMAddComponent;
  let fixture: ComponentFixture<VMAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
