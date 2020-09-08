import { ClientService } from './client.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let identity = 'users';

@Injectable({
  providedIn: 'root'
})


export class UserService {


  constructor(private http: ClientService){
  }

  create(data: any):Observable<any>{

    let d = JSON.parse('{"name": "'+data.name+'", "email": "' +data.email+'"}');

    alert(d.email);

    return this.http.create(d, identity);
  }

  getAll():Observable<any>{
    return this.http.getAll(identity);
  }
}
