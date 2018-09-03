import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerModalComponent } from "./player-modal.component";
import { AppModuleForTest } from "../../../app.module";

describe("PlayerModalComponent", () => {
  let component: PlayerModalComponent;
  let fixture: ComponentFixture<PlayerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
