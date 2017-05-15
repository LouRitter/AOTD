
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(term: string) {
    return this.http
            .get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${term}&api_key=022acc7ed3ff0e94a5858ab2d6084760&format=json`)
            .map((response) => response.json().results.artistmatches.artist)
  }
}