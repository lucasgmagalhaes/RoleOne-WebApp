import { Component, OnInit, Input } from "@angular/core";
import { Color } from "../../../../core/enums/color.enum";
import { ModalService } from "../service/modal.service";
import { Position } from "../../../../core/enums/position.enum";
/**
 * @see https://bulma.io/documentation/elements/button/
 * @constructor ModalService
 * @description Contains the default structure of a model to be used in all aplication
 * @since 1.0.0
 */
@Component({
  selector: "rpg-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  /**
   * @default Title
   */
  @Input()
  public name: string = "Title";
  /**
   * @default null
   */
  @Input()
  public id: string = null;
  /**
   * @default 600px
   */
  @Input()
  public height: string = "600px";
  /**
   * @default 100%
   */
  @Input()
  public maxHeight: string = "100%";
  /**
   * @default 100%
   */
  @Input()
  public maxWidth: string = "100%";
  /**
   * @default 400px
   */
  @Input()
  public width: string = "400px";
  /**
   * @default RIGHT
   */
  @Input()
  public saveValue: string = "Save";
  /**
   * @default Cancel
   */
  @Input()
  public cancelValue: string = "Cancel";
  /**
   * @default DARK
   */
  @Input()
  public saveColor: Color = Color.DARK;
  /**
   * @default DANGER
   */
  @Input()
  public cancelColor: Color = Color.DANGER;
  /**
   * @default false
   */
  @Input()
  public outlined: boolean;
  /**
   * @default false
   */
  @Input()
  public inverted: boolean;
  /**
   * @default false
   */
  @Input()
  public rounded: boolean;
  /**
   * @default false
   */
  @Input()
  public loading: boolean;
  /**
   * @default false
   */
  @Input()
  public disabled: boolean;
  /**
   *  @default RIGHT
   */
  @Input()
  public footerButtonAligment: Position = Position.RIGHT;
  /**
   * @default true
   */
  @Input()
  public hasHeader: boolean = true;
  /**
   * @default true
   */
  @Input()
  public hasFooter: boolean = true;
  /**
   * @default true
   */
  @Input()
  public hasHeaderCloseButton: boolean = true;
  /**
   * @default false
   */
  @Input()
  public isActive: boolean = false;
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
