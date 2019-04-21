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
  nexVideo = 29.910418;
  validate = false;
  vingadores = "../assets/video/Vingadores - Ultimato - É o fim.mp4"
  url = "https://globojuntos.firebaseio.com"
  totalVotos: number;
  primeiraOpcao = 'esta é a opção 1'
  segundaOpcao = 'esta é a opção 2'
  primeiroOpcaoVoto: number;
  segundoOpcaoVoto: number;


  ngOnInit() {

    setTimeout(() => {
      this.showSnack()
      this.showSnack2()
    }, 8000);
    this.getVote()
  }
  getVote() {
    this.http.get(this.url + '/votos.json').subscribe((data: any) => {
      7
      this.totalVotos = data.op1 + data.op2
      this.primeiroOpcaoVoto = data.op1;
      this.segundoOpcaoVoto = data.op2;
      console.log('data', data)
    })

  }

  setCurrentTime(data) {
    this.currentTime = data.target.currentTime;
    if (this.currentTime > this.nexVideo) {
      if (this.primeiroOpcaoVoto > this.segundoOpcaoVoto) {
        this.video.nativeElement.src = "../assets/video/Vingadores - Ultimato - É o fim.mp4";
      }
      else if (this.primeiroOpcaoVoto < this.segundoOpcaoVoto) {
        this.video.nativeElement.src = "../assets/video/Vingadores - Ultimato - É o fim.mp4";
      }

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
}