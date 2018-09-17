import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemViewComponent } from "./item-view.component";
import { AppModuleForTest } from "../../../../app.module";

describe("ItemViewComponent", () => {
  let component: ItemViewComponent;
  let fixture: ComponentFixture<ItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
