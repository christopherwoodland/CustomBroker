import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmListComponent } from './vm-list.component';

describe('VMListComponent', () => {
  let component: VmListComponent;
  let fixture: ComponentFixture<VmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
