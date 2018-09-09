import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomClassModalComponent } from './custom-class-modal.component';

describe('CustomClassModalComponent', () => {
  let component: CustomClassModalComponent;
  let fixture: ComponentFixture<CustomClassModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomClassModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomClassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
