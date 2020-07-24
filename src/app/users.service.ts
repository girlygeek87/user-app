import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  url: string = "https://reqres.in/api/users"
  idUrl: string = "https://reqres.in/api/"

  getPerson(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.url)
  }

getById(id): Observable<Person> {
  console.log(this.idUrl + 'id/'+id)
  return this.httpClient.get<Person>(this.idUrl +'id/'+ id)
}

update(id, person): Observable<Person> {
  return this.httpClient.put<Person>(this.idUrl+'id/'  + id, JSON.stringify(person))
  
}
}
