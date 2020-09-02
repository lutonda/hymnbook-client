import { ClientService } from './client.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

let identity='hymns';
@Injectable({
  providedIn: 'root'
})
export class HymnService {

  constructor(private http: ClientService) { }

  getAllHymns(): Observable<any> {
    return this.http.getAll(identity);
  }
  getOneHymn(id:String): Observable<any> {
    return this.http.getOne(id,identity);
  }
}
