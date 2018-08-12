import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AppModuleForTest } from "./app.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModuleForTest]
    }).compileComponents();
  }));

  it("should create the app", () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  });
});
