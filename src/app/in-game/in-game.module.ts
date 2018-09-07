import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { ToolsComponent } from './components/tools/tools.component';
import { UsersComponent } from './components/users/users.component';
import { ChatComponent } from './components/chat/chat.component';
import { MapComponent } from './components/map/map.component';
@NgModule({
  imports: [CommonModule],
  declarations: [MainWindowComponent, ToolsComponent, UsersComponent, ChatComponent, MapComponent],
  exports: [MainWindowComponent, ToolsComponent, UsersComponent, ChatComponent, MapComponent]
})
export class InGameModule { }
