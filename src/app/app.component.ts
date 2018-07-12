import { Component } from '@angular/core';
import { FireService } from './architecture/services/fire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() { }

  public criar(){
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
    
    //console.log(this.fire.updateObject(person, '/person'))
  }
}
