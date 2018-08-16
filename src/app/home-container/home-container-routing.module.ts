import { NgModule } from "../../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../../node_modules/@angular/router";
import { SelectionComponent } from "../play/components/selection/selection.component";

export const ROUTES: Routes = [
  { path: "play/selection", component: SelectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HomeContainerRoutesModule {}
