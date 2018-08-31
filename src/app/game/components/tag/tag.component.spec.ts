import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TagComponent } from "./tag.component";
import { AppModuleForTest } from "../../../app.module";

describe("TagComponent", () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
