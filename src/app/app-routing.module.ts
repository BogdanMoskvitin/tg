import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'start', component: StartComponent, canActivate: [AuthGuard] },
  { path: 'first-message', component: FirstMessageComponent, canActivate: [AuthGuard] },
  { path: 'first-offline', component: FirstOfflineComponent, canActivate: [AuthGuard] },
  { path: 'total-messages', component: TotalMessagesComponent, canActivate: [AuthGuard] },
  { path: 'chatterbox', component: ChatterboxComponent, canActivate: [AuthGuard] },
  { path: 'favorite-sticker', component: FavoriteStickerComponent, canActivate: [AuthGuard] },
  { path: 'percentage-of-voice-messages', component: PercentageOfVoiceMessagesComponent, canActivate: [AuthGuard] },
  { path: 'name', component: NameComponent, canActivate: [AuthGuard] },
  { path: 'longest-voice-message', component: LongestVoiceMessageComponent, canActivate: [AuthGuard] },
  { path: 'total-video-messages', component: TotalVideoMessagesComponent, canActivate: [AuthGuard] },
  { path: 'finish', component: FinishComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
