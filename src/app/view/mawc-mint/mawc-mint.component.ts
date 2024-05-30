import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mawc-mint',
  templateUrl: './mawc-mint.component.html',
  styleUrls: ['./mawc-mint.component.css'],
})
export class MawcMintComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var video: any = document.querySelector('video');
    video.muted = true;
    video.play();
  }
}
