import { Component } from '@angular/core';
import { FireService } from './architecture/services/fire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private fire: FireService) { }

  public criar(){
    let person = {
      name: "Lucas",
      age: "12"
    }
    console.log(this.fire.create(person, '/person'))
  }
}
