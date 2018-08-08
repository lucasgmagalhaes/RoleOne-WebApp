import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HeaderComponent } from "./static/header/header.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { FooterComponent } from "./static/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { APP_BASE_HREF } from "@angular/common";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/**
 * Module must be used only for testing proporse. Provides all services, components... from AppModule
 * and others proper settings for tests.
 */
@NgModule({
  imports: [AppModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
})
export class AppModuleForTest {}
