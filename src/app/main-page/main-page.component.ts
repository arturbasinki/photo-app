import { Component, OnInit } from '@angular/core';
import { PhotoFetchService } from '../photo-fetch.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  photoURL: string = '';

  constructor(private photoFetchService: PhotoFetchService) {
    this.fetchPhoto();
  }

  getPhoto() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoFetchService.getPhoto().subscribe((response) => {
      this.photoURL = response;
    });
  }

  ngOnInit(): void {}
}
