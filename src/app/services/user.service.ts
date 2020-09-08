import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let identity = 'users';

@Injectable({
  providedIn: 'root'
})


export class UserService {


  constructor(private http: HttpClient){
  }

  create(data: any):Observable<any>{

    let u = JSON.parse('{"name": "'+data.name+'", "email": "' +data.email+'"}');

    alert(u.email);

    return this.http.post('http://127.0.0.1:8800/api/v1/users/new', u);
  }

  getAll():Observable<any>{
    return this.http.get('http://127.0.0.1:8800/api/v1/users')
  }
}
