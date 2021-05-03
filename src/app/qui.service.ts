import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuiService {
  url = 'http://localhost:3000';
  constructor(private http : HttpClient ) { }
  ourteam(): Observable<any> {
    return  this.http.get<any>(`${this.url}/teammem`);

}

contactpost(contact : any ) : Observable<any>{
  return this.http.post<any>(`${this.url}/Contact`,contact)
}
reservation(reserv : any ): Observable<any>{
  return this.http.post<any>(`${this.url}/reservation`,reserv)
}
}