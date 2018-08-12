import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { AppRoutesModule } from "./app.routes";
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from "@angular/common";
import { AuthModule } from "./auth/auth.module";
import { HomeContainerModule } from "./home-container/home-container.module";
import { StaticModule } from "./static/static.module";
import { DetailModule } from "./detail/detail.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    AppRoutesModule,
    HomeContainerModule,
    StaticModule,
    DetailModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
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
