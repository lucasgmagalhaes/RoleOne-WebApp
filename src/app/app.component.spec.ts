import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AngularFireDatabase } from "angularfire2/database";
import { FireService } from "./core/services/fire.service";

describe("AppComponent", () => {
  const spy = jasmine.createSpyObj("FireService", ["getValue"]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [AngularFireDatabase, { provide: FireService, value: spy }]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
