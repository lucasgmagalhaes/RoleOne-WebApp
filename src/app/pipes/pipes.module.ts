import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExperiencePipe } from "./experience/experience.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [ExperiencePipe],
  exports: [ExperiencePipe]
})
export class PipesModule {}
