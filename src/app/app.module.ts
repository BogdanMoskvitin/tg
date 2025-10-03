import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthComponent } from './pages/auth/auth.component';
import { StartComponent } from './pages/start/start.component';
import { FirstMessageComponent } from './pages/first-message/first-message.component';
import { FirstOfflineComponent } from './pages/first-offline/first-offline.component';
import { TotalMessagesComponent } from './pages/total-messages/total-messages.component';
import { ChatterboxComponent } from './pages/chatterbox/chatterbox.component';
import { FavoriteStickerComponent } from './pages/favorite-sticker/favorite-sticker.component';
import { PercentageOfVoiceMessagesComponent } from './pages/percentage-of-voice-messages/percentage-of-voice-messages.component';
import { NameComponent } from './pages/name/name.component';
import { LongestVoiceMessageComponent } from './pages/longest-voice-message/longest voice message.component';
import { TotalVideoMessagesComponent } from './pages/total-video-messages/total-video-messages.component';
import { FinishComponent } from './pages/finish/finish.component';
import { FormsModule } from '@angular/forms';
import { TimeComponent } from './components/time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    StartComponent,
    FirstMessageComponent,
    FirstOfflineComponent,
    TotalMessagesComponent,
    ChatterboxComponent,
    FavoriteStickerComponent,
    PercentageOfVoiceMessagesComponent,
    NameComponent,
    LongestVoiceMessageComponent,
    TotalVideoMessagesComponent,
    FinishComponent,
    TimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterOutlet,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
