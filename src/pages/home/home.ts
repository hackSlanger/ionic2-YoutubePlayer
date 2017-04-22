import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private youtube: YoutubeVideoPlayer) {

  }

  openVid(){
    this.youtube.openVideo('6fZ1STQ5MrE');
  }

}
