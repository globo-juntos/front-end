import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit() {

    setTimeout(() => {
      this.showSnack()
      this.showSnack2()
      this.showSnack3()
    }, 8000);

  }

  @ViewChild('video')

  public video: ElementRef;

  currentTime: any;
  nexVideo = 29.910418;
  validate = false;
  vingadores = "../assets/video/Vingadores - Ultimato - É o fim.mp4"

  setCurrentTime(data) {
    this.currentTime = data.target.currentTime;
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
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 22000);
  }
  showSnack2() {
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 22000);
  }
  showSnack3() {
    var x = document.getElementById("snackbar3");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 22000);
  }
  showSnackAll() {

  }
}