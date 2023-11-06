import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlmondcoveapiService {

  private apiUrl = 'https://almondcove.in/api/newsletter';
  constructor(private http: HttpClient) { }
  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
