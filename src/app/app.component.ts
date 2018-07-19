import { Component } from "@angular/core";
import { FireService } from "./core/services/fire.service";
import { AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  list: Observable<any[]>;

  constructor(private fire: FireService) {
    this.fire.delete('-LHTtnZUIFCtGhATGIYg');
    
  }
}

export interface test {
  name: string
}