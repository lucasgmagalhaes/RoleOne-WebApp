import { NgModule } from "@angular/core";
import { ExperiencePipe } from "./experience/experience.pipe";
import { CommaSeparationPipe } from "./comma-separation/comma-separation.pipe";

@NgModule({
  declarations: [ExperiencePipe, CommaSeparationPipe],
  exports: [ExperiencePipe, CommaSeparationPipe]
})
export class PipesModule {}
