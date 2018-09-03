import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClickOutDirective } from "./directives/click-out.directive";
import { ExperiencePipe } from './pipes/pipes.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ClickOutDirective, ExperiencePipe],
  exports: [ClickOutDirective]
})
export class SharedModule {}
