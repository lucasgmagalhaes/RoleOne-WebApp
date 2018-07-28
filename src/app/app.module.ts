import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HeaderComponent } from "./header/header.component";
import { SingupComponent } from "./singup/singup.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, SingupComponent, FooterComponent],
  imports: [BrowserModule, CoreModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
