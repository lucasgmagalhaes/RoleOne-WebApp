import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomClassModalComponent } from "./custom-class-modal.component";
import { ModalModule } from "../../../../shared/components/modal/modal.module";
import { CardClassComponent } from "../card-class/card-class.component";
import { PipesModule } from "../../../../pipes/pipes.module";

describe("CustomClassModalComponent", () => {
  let component: CustomClassModalComponent;
  let fixture: ComponentFixture<CustomClassModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule, PipesModule],
      declarations: [CustomClassModalComponent, CardClassComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomClassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
