import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConquestsComponent } from "./conquests.component";
import { AppModuleForTest } from "../../../app.module";

describe("ConquestsComponent", () => {
  let component: ConquestsComponent;
  let fixture: ComponentFixture<ConquestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConquestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
