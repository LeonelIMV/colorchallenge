import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  baseURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }


  getTotalPages():Observable<any> {
    return this.http.get(this.baseURL);
  }

  getColor(page:string): Observable<any> {
    return this.http.get(this.baseURL+page);
  }

}
