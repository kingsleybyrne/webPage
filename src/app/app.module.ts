import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import { AppComponent } from './app.component';
import {YoutubeComponent} from './youtubePlayer/youtube.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    MapComponent,
    AppComponent,
    YoutubeComponent,
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBHan_EXmvNWqrfPih4tgjEihmDQyDXHoQ'}),
    NgbModule,
    FormsModule
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent,MapComponent,YoutubeComponent]
})
export class AppModule { }
