import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-searh.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'gip-giphy-search-manual',
  templateUrl: 'giphy-search-manual.component.html'
})

export class GiphySearchManualComponent implements OnInit {

  gifs: any[] = []

  constructor(private giphySearchService: GiphySearchService) { }

  ngOnInit() {
  }

  pesquisarGiphy() {
    this.giphySearchService.pesquisarGiphy('2', 'happy')
      .subscribe((response: Response) => {
        this.gifs = response.json().data
      })
  }
}
