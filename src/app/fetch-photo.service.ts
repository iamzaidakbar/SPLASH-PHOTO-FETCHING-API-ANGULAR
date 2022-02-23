import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface splash{
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {

  constructor(private http: HttpClient) { }
  fetchPhoto(){
    return this.http.get<splash>('https://api.unsplash.com/photos/random',{
      headers: {
        Authorization : 
          'Client-ID OJsCqHVRBIqJJlIUByDCOkhi0uO5RsitpVw666gPai4'
        
      }
    })
  }
}
