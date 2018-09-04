import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'ro1-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openMapModal() {
    this.modalService.open("mapModal");
  }
}
