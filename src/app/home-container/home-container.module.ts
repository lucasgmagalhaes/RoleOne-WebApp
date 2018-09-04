import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { CampainsComponent } from "./components/campains/campains.component";
import { CampainComponent } from "./components/campains/campain/campain.component";
import { HomeContainerRoutesModule } from "./home-container-routing.module";

@NgModule({
  imports: [CommonModule, HomeContainerRoutesModule],
  declarations: [HomeComponent, CampainsComponent, CampainComponent],
  exports: [HomeComponent, CampainsComponent, CampainComponent]
})
export class HomeContainerModule {}
