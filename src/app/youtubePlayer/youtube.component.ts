import {Component} from '@angular/core';

@Component({
    selector:'youtube',
    templateUrl:'./youtube.component.html',
})
export class YoutubeComponent{
    id = 'IgKWPdJWuBQ';
  private player;
  private ytEvent;

  constructor() {
  
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }   
}