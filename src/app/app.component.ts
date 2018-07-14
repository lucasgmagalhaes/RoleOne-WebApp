import { Component } from '@angular/core';
import { FireService } from './architecture/services/fire.service';
import { AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list: any[];

  constructor(private fire: FireService) { }

  public criar() {
    let person = {
      name: "Lu",
      age: "2110",
      key: "-LHAbEFaMaZP82cHptzz"
    }

    let persons = [
      {
        name: "Lucas",
        age: "12"
      },
      {
        name: "BTATA",
        age: "12"
      }
    ]

    this.fire.getList('/person').subscribe(data => {
      this.list = data
      console.log(data)
    });
  }
}
