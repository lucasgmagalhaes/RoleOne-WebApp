import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ro1-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() isForAdd: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
