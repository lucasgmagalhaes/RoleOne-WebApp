import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClickOutDirective } from "./directives/click-out.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [ClickOutDirective],
  exports: [ClickOutDirective]
})
export class SharedModule {}
