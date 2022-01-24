import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoFetchService {
  constructor(private http: HttpClient) {}

  unsplashHttp: string = 'https://api.unsplash.com/photos/random';
  clientID: string = 'wlwMx6z6PFhqZ3UTIHWOXHXkGsFCXC8S2dFY9tjOx1o';

  getPhoto() {
    return this.http
      .get<UnsplashResponse>(this.unsplashHttp, {
        headers: {
          Authorization: `Client-ID ${this.clientID}`,
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
