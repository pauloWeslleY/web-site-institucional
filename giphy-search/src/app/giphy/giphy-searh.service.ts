import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class GiphySearchService {

  constructor(private http: HttpClient) {
  }

  pesquisarGiphy(limit: string, term: string): Observable<any> {
    // const url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC&limit=' + limit
    const url = `http://api.giphy.com/v1/gifs/search?q= ${term} &api_key=dc6zaTOxFJmzC&limit= ${limit}`
    return this.http.get(url)
  }
}
