import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectionComponent } from "./components/selection/selection.component";
import { HomeContainerModule } from "../home-container/home-container.module";
@NgModule({
  imports: [CommonModule, HomeContainerModule],
  declarations: [SelectionComponent],
  exports: [SelectionComponent]
})
export class PlayModule {}
