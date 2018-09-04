import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CampaignComponent } from "./components/campaign/campaign.component";
import { PlayerComponent } from "./components/player/player.component";
import { MapComponent } from "./components/map/map.component";
import { QuestComponent } from "./components/quest/quest.component";
import { ThemeModalComponent } from "./components/theme-modal/theme-modal.component";
import { PlayerModalComponent } from "./components/player-modal/player-modal.component";
import { MapModalComponent } from "./components/map-modal/map-modal.component";
import { QuestModalComponent } from "./components/quest-modal/quest-modal.component";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  imports: [CommonModule, PipesModule],
  declarations: [
    CampaignComponent,
    PlayerComponent,
    MapComponent,
    QuestComponent,
    ThemeModalComponent,
    PlayerModalComponent,
    MapModalComponent,
    QuestModalComponent
  ],
  exports: [
    CampaignComponent,
    PlayerComponent,
    MapComponent,
    QuestComponent,
    ThemeModalComponent,
    PlayerModalComponent,
    MapModalComponent
  ]
})
export class CreateGameModule {}
