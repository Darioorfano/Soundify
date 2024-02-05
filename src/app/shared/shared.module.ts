import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    MediaPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    SideBarComponent,
    HeaderComponent,
    MediaPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent

  ]

})
export class SharedModule { }
