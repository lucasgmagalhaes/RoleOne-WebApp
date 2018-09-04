import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClickOutDirective } from "./directives/click-out.directive";
import { ExperiencePipe } from "./pipes/experience.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [ClickOutDirective, ExperiencePipe],
  exports: [ClickOutDirective, ExperiencePipe]
})
export class SharedModule {}
