import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAll(service: String): Observable<any> {
    return this.http.get('http://127.0.0.1:8800/api/v1/' + service);
  }
  getOne(id: String, service: String): Observable<any> {
    return this.http.get('http://127.0.0.1:8800/api/v1/' + service + '/' + id);
  }
  create(data: any, service: String): Observable<any> {
    return this.http.post('http://127.0.0.1:8800/api/v1/' + service, data);
  }
  update(id: String, data: any, service: String): Observable<any> {
    return this.http.post('http://127.0.0.1:8800/api/v1/' + service + '/' + id, data);
  }
}
