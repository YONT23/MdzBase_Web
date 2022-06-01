import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrestarI } from '../models/prestar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestarService {

  base_url = 'http://localhost:4000'

  constructor(
    private http: HttpClient
  ) { }

  getAllPrestar(): Observable<{ prestar: PrestarI[] }>{
    return this.http.get<{ prestar: PrestarI[] }>(this.base_url + '/prestar')
  }

  createPrestar(data:any): Observable<PrestarI> {
    return this.http.post<PrestarI>(this.base_url + '/createPrestar',data)
  }
}