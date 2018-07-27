import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  list: Observable<any[]>;

  constructor() {
  }

  uploadFile(event){
    console.log(event.type);
  }
}
