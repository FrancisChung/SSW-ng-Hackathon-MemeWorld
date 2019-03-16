import { MemeJSON } from './../memes/memes.d';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meme-detail',
  templateUrl: './meme-detail.component.html',
  styleUrls: ['./meme-detail.component.scss']
})
export class MemeDetailComponent implements OnInit {
  @Input() meme: MemeJSON;
  constructor() { }

  ngOnInit() {
  }

}
