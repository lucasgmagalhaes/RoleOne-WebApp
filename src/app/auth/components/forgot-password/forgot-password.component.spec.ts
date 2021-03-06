import { AppModuleForTest } from "../../../app.module";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ForgotPasswordComponent } from "./forgot-password.component";

describe("ForgotPasswordComponent", () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
