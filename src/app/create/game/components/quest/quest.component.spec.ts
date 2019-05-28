import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestComponent } from "./quest.component";
import { PipesModule } from "../../../../pipes/pipes.module";

describe("QuestComponent", () => {
  let component: QuestComponent;
  let fixture: ComponentFixture<QuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestComponent],
      imports: [PipesModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
