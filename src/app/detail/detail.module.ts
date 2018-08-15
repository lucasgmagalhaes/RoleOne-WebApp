import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileEditionComponent } from "./components/profile-edition/profile-edition.component";
import { ProfileComponent } from './components/profile/profile.component';
import { DetailRoutingModule } from "./detail-routing.module";
import { HomeContainerModule } from "../home-container/home-container.module";
import { ConquestsComponent } from './components/conquests/conquests.component';
import { ConquestComponent } from './components/conquests/conquest/conquest.component';

@NgModule({
  imports: [CommonModule, DetailRoutingModule, HomeContainerModule],
  declarations: [ProfileEditionComponent, ProfileComponent, ConquestsComponent, ConquestComponent],
  exports: [ProfileEditionComponent, ProfileComponent, ConquestsComponent]
})
export class DetailModule {}
