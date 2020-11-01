import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

 private satelliteAllurl = 'https://api.spaceXdata.com/v3/launches?limit=100';

  constructor(private http: HttpClient) { }

  getSatelliteInfo(): Observable<any> {
    return this.http.get<any>(this.satelliteAllurl)
  }
  getSatelliteInfoFiltered(params:any): Observable<any> {
    return this.http.get<any>(this.satelliteAllurl,{params:params})
  }
}
