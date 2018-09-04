import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CampaignComponent } from "./components/campaign/campaign.component";
import { PlayerComponent } from "./components/player/player.component";
import { MapComponent } from "./components/map/map.component";
import { QuestComponent } from "./components/quest/quest.component";
import { ThemeModalComponent } from "./components/theme-modal/theme-modal.component";
import { SharedModule } from "../../shared/shared.module";
import { PlayerModalComponent } from "./components/player-modal/player-modal.component";
import { MapModalComponent } from "./components/map-modal/map-modal.component";
import { QuestModalComponent } from './components/quest-modal/quest-modal.component';

@NgModule({
  imports: [CommonModule, SharedModule],
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
