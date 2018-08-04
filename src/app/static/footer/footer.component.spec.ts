import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";
import { AppModuleForTest } from "../../app.module";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
