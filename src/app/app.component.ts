import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) {

  }

  @ViewChild('video')

  public video: ElementRef;
  currentTime: any;
  nexVideo = 10.000000;
  validate = false;
  videoInicio = "../assets/video/video.MOV"
  url = "https://globojuntos.firebaseio.com"
  totalVotos: number;
  segundaOpcao = 'Confessionário'
  primeiraOpcao = 'Pscina'
  votoPscina: number;
  votoConfessionario: number;
  interval;


  ngOnInit() {

    setTimeout(() => {
      this.showSnack()
      this.showSnack2()
    }, 8000);


    this.startTimer()
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.getVote()
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  getVote() {
    this.http.get(this.url + '/votos.json').subscribe((data: any) => {
      7
      this.totalVotos = data.op1 + data.op2
      this.votoPscina = data.op1;
      this.votoConfessionario = data.op2;
      console.log('data', data)
    })

  }

  setCurrentTime(data) {
    this.currentTime = data.target.currentTime;
    console.log(this.currentTime)
    if (this.currentTime > this.nexVideo) {
      if (this.votoPscina > this.votoConfessionario) {
        this.video.nativeElement.src = "../assets/video/piscinaVideo.MOV";
      }
      else if (this.votoConfessionario > this.votoPscina) {
        this.video.nativeElement.src = "../assets/video/confessionarioVideo.MOV";
      } else {
        this.video.nativeElement.src = "../assets/video/piscinaVideo.MOV";
      }

    }
  }

  showSnack() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 15000);
  }
  showSnack2() {
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 15000);
  }
}