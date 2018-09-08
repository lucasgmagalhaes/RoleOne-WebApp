import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Modals } from '../../enums/modals.enum';

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
    this.modalService.open(Modals.MAP_MODAL);
  }
}
