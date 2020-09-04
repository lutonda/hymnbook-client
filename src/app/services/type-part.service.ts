import { ClientService } from './client.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

let identity="type_parts";
@Injectable({
  providedIn: 'root'
})
export class TypePartService {
  constructor(private http: ClientService) { }

  
  getAllTypePart(): Observable<any> {
    return this.http.getAll(identity);
  }
  getOneTypePart(id:String): Observable<any> {
    return this.http.getOne(id,identity);
  }
  update(data): Observable<any>{
    return this.http.update(data._id,data,identity)
  }
  create(data): Observable<any>{
    return this.http.create(data,identity)
  }
}
