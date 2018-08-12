import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampainsComponent } from './campains.component';
import { AppModuleForTest } from '../../../app.module';

describe('CampainsComponent', () => {
  let component: CampainsComponent;
  let fixture: ComponentFixture<CampainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
