import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HymnService {

  constructor(private http: HttpClient) { }

  getAllHymns(): Observable<any> {
    return this.http.get('http://127.0.0.1:8800/api/v1/hymns');
  }
}