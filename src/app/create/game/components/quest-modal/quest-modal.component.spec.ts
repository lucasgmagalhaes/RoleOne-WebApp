import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestModalComponent } from "./quest-modal.component";
import { ExperiencePipe } from "../../../../shared/pipes/experience.pipe";
import { SharedModule } from "../../../../shared/shared.module";

describe("QuestModalComponent", () => {
  let component: QuestModalComponent;
  let fixture: ComponentFixture<QuestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestModalComponent],
      imports: [SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
