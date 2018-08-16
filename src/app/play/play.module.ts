import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectionComponent } from "./components/selection/selection.component";

@NgModule({
  imports: [CommonModule],
  declarations: [SelectionComponent],
  exports: [SelectionComponent]
})
export class PlayModule {}
