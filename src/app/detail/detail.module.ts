import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileEditionComponent } from "./components/profile-edition/profile-edition.component";
import { ProfileComponent } from './components/profile/profile.component';
import { DetailRoutingModule } from "./detail-routing.module";
import { HomeContainerModule } from "../home-container/home-container.module";

@NgModule({
  imports: [CommonModule, DetailRoutingModule, HomeContainerModule],
  declarations: [ProfileEditionComponent, ProfileComponent],
  exports: [ProfileEditionComponent, ProfileComponent]
})
export class DetailModule {}
