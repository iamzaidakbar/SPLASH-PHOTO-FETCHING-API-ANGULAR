import { Component, OnInit } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.css']
})
export class PhotoDisplayComponent implements OnInit {
  imgUrl = '' as string

  constructor(private service: FetchPhotoService) { 
    this.reFetch()
  }

  onClickFetchImage(){
      this.reFetch()
  }

  reFetch(){
     this.service.fetchPhoto().subscribe( response => {
       this.imgUrl = response.urls.regular
     })
  }

  ngOnInit(): void {
  }

}
