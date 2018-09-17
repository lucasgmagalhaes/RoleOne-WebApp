import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { AppRoutesModule } from "./app-routing.module";
import {
  APP_BASE_HREF,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { AuthModule } from "./auth/auth.module";
import { HomeContainerModule } from "./home-container/home-container.module";
import { StaticModule } from "./static/static.module";
import { DetailModule } from "./detail/detail.module";
import { PlayModule } from "./play/play.module";
import { CreateGameModule } from "./create/game/create-game.module";
import { InGameModule } from "./in-game/in-game.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    AppRoutesModule,
    HomeContainerModule,
    StaticModule,
    DetailModule,
    PlayModule,
    CreateGameModule,
    InGameModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
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
