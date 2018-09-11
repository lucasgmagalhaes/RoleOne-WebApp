import { Component, OnInit, Input } from "@angular/core";
import { Color } from "../../enums/color.enum";
import { ModalService } from "../../services/modal.service";
/**
 * @see https://bulma.io/documentation/elements/button/
 * @description Contains the default structure of a model to be used in all aplication
 * @since 1.0.0
 */
@Component({
  selector: "ro1-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  @Input()
  public name: string = "Title";
  @Input()
  public id: string = "";
  @Input()
  public height: string = "600px";
  @Input()
  public maxHeight: string;
  @Input()
  public maxWidth: string = "";
  @Input()
  public width: string = "400px";
  @Input()
  public saveValue: string = "Save";
  @Input()
  public cancelValue: string = "Cancel";
  @Input()
  public saveColor: Color = Color.DARK;
  @Input()
  public cancelColor: Color;
  @Input()
  public outlined: boolean;
  @Input()
  public inverted: boolean;
  @Input()
  public rounded: boolean;
  @Input()
  public loading: boolean;
  @Input()
  public disabled: boolean;

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  save() {
    this.modalService.onSave(this.id);
  }

  cancel() {
    this.modalService.onCancel(this.id);
    this.modalService.close(this.id);
  }

  close() {
    this.modalService.close(this.id);
    this.modalService.onClose(this.id);
  }
}
