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
import { ItemViewComponent } from "./components/item-view/item-view.component";
import { ItemAddedComponent } from "./components/item-added/item-added.component";
import { CustomClassModalComponent } from "./components/custom-class-modal/custom-class-modal.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [CommonModule, PipesModule, SharedModule],
  declarations: [
    CampaignComponent,
    PlayerComponent,
    MapComponent,
    QuestComponent,
    ThemeModalComponent,
    PlayerModalComponent,
    MapModalComponent,
    QuestModalComponent,
    ItemViewComponent,
    ItemAddedComponent,
    CustomClassModalComponent
  ],
  exports: [
    CampaignComponent,
    PlayerComponent,
    MapComponent,
    QuestComponent,
    ThemeModalComponent,
    PlayerModalComponent,
    MapModalComponent,
    ItemViewComponent,
    ItemAddedComponent
  ]
})
export class CreateGameModule {}
