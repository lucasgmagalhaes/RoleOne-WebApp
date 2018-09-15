import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "./component/modal.component";
import { ModalService } from "./service/modal.service";

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule {}
