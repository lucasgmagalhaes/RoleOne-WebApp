import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestModalComponent } from "./quest-modal.component";
import { PipesModule } from "../../../../pipes/pipes.module";

describe("QuestModalComponent", () => {
  let component: QuestModalComponent;
  let fixture: ComponentFixture<QuestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestModalComponent],
      imports: [PipesModule]
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
