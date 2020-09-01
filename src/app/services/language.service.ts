import { Observable } from 'rxjs';
import { ClientService } from './client.service';
import { Injectable } from '@angular/core';

let identity="languages";
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: ClientService) { }

  getAlllanguages(): Observable<any> {
    return this.http.getAll(identity);
  }
  getOnelanguage(id:String): Observable<any> {
    return this.http.getOne(id,identity);
  }
}
