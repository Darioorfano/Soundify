import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    MediaPlayerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SideBarComponent,
    HeaderComponent,
    MediaPlayerComponent

  ]

})
export class SharedModule { }
