import { Observable } from 'rxjs';
import { ClientService } from './client.service';
import { Injectable, OnInit } from '@angular/core';

let identity='authors';

@Injectable({
  providedIn: 'root'
})

export class AuthorService{

  constructor(private http:ClientService) { }

  getAllAthors():Observable<any>{
    return this.http.getAll(identity);
  }
  getOneAuthor(_id:string):Observable<any>{
    return this.http.getOne(_id, identity);
  }
  updateAuthor(data):Observable<any>{
    return this.http.update(data._id, data, identity);
  }
  create(data):Observable<any>{
    return this.http.create(data, identity);
  }
}
