import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MainWindowComponent } from "./main-window.component";
import { AppModuleForTest } from "../../../app.module";

describe("MainWindowComponent", () => {
  let component: MainWindowComponent;
  let fixture: ComponentFixture<MainWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
