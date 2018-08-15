import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ro1-conquest',
  templateUrl: './conquest.component.html',
  styleUrls: ['./conquest.component.scss']
})
export class ConquestComponent implements OnInit {

  @Input() name: string;
  @Input() desription: string;
  @Input() achieved: boolean;
  @Input() percentageToAchiev: number;
  @Input() image: string;
  
  constructor() { }

  ngOnInit() {
  }

}
