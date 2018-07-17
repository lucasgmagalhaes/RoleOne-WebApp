import { Component } from '@angular/core';
import { FireService } from './core/services/fire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: any[];

  constructor(private fire: FireService) { }

  public criar() {
    let person = {
      name: "teste2",
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
    this.fire.create(person, 'tests');
    }
}
