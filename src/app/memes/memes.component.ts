import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MemeDetailComponent } from '../meme-detail/meme-detail.component';
import {Meme, Data, MemeJSON} from './memes';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})



export class MemesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  memes: Meme[];

  searchText = '';


  ngOnInit() {
    this.returnMemes();
  }

  returnMemes(): any {
    this.httpClient.get<MemeJSON>('https://api.imgflip.com/get_memes').subscribe(
      r => this.memes = r.data.memes.filter(a => String(a.name).toLowerCase().includes(this.searchText.toLowerCase())));
  }

  keyDownEnter(event) {
      this.doSearch();
  }

  doSearch() {
    console.log(this.searchText);
    this.returnMemes();

    // this.returnMemes();
    // setTimeout(function(){}, 3000);
    // var filtered = this.memes.filter(a=>a.name.includes(this.searchText));
    // this.memes= filtered;
    // console.log(filtered);
  }
}
