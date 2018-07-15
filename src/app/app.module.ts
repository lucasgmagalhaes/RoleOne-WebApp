import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArchitectureModule } from './architecture/architecture.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArchitectureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
