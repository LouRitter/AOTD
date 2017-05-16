
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(term: string) {
    return this.http
            .get(`https://api.spotify.com/v1/search?q=Muse&type=track,artist,album&market=US&limit=20&offset=0`)
            .map((response) => response.json())
  }
}