import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { ToolbarComponent } from './components/tools/toolbar.component';
import { UsersComponent } from './components/users/users.component';
import { ChatComponent } from './components/chat/chat.component';
@NgModule({
  imports: [CommonModule],
  declarations: [MainWindowComponent, ToolbarComponent, UsersComponent, ChatComponent],
  exports: [MainWindowComponent, ToolbarComponent, UsersComponent, ChatComponent]
})
export class InGameModule { }
