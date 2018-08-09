import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HeaderComponent } from "./static/header/header.component";
import { appRoutesModule } from "./app.routes";
import { FooterComponent } from "./static/footer/footer.component";
import { APP_BASE_HREF } from "@angular/common";
import { AuthModule } from "./auth/auth.module";
import { HomeContainerModule } from "./home-container/home-container.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    appRoutesModule,
    HomeContainerModule
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
