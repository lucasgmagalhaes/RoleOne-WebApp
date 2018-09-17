import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardClassComponent } from "./card-class.component";
import { PipesModule } from "../../../../pipes/pipes.module";

describe("CardClassComponent", () => {
  let component: CardClassComponent;
  let fixture: ComponentFixture<CardClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardClassComponent],
      imports: [PipesModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
