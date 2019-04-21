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
    setTimeout(()=>{
      this.showSnack()
      this.showSnack2()
      this.showSnack3()
 }, 3000);
    if (this.currentTime > this.nexVideo) {
      this.validate = true;
      this.video.nativeElement.src = "../assets/video/Vingadores - Ultimato - É o fim.mp4";
      this.video.nativeElement.load();
      this.video.nativeElement.play();

    }
  }

  showSnack() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 25000);
  }
  showSnack2() {
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 25000);
  }
  showSnack3() {
    var x = document.getElementById("snackbar3");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 25000);
  }
}