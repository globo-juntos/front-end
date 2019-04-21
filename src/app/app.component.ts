import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('video')

  public video: ElementRef;

  currentTime: any;
  nexVideo = 29.910418;
  validate = false;
  vingadores = "../assets/video/Vingadores - Ultimato - É o fim.mp4"

  setCurrentTime(data) {
    this.currentTime = data.target.currentTime;
    console.log(this.currentTime)
    console.log(this.validate)
    if (this.currentTime > this.nexVideo) {
      this.validate = true;
      this.video.nativeElement.src =  "../assets/video/Vingadores - Ultimato - É o fim.mp4";
      this.video.nativeElement.load();
      this.video.nativeElement.play();

    }
  }
}