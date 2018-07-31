import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ro1-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private greatings: Array<string> = [
    "Mage",
    "Warrior",
    "White Mage",
    "Rogue",
    "Murlock",
    "Goblin",
    "to the republic"
  ];

  constructor() {}

  ngOnInit() {}

  getRandomGreeting(): string {
    let guy = this.greatings[
      Math.floor(Math.random() * this.greatings.length + 0)
    ];
    //console.log(this.greatings.indexOf(guy));
    return guy;
  }
}
