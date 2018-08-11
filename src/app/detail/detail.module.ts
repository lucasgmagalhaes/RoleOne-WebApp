import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileEditionComponent } from "./components/profile-edition/profile-edition.component";
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfileEditionComponent, ProfileComponent],
  exports: [ProfileEditionComponent, ProfileComponent]
})
export class DetailModule {}
