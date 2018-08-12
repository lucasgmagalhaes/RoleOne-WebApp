import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { StaticRoutesModule } from "./static-routing.module";
@NgModule({
  imports: [CommonModule, StaticRoutesModule],
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent]
})
export class StaticModule {}
