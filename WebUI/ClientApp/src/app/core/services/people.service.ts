import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Person } from 'src/app/core/models/person';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  private readonly url = '/api/people';

  constructor(private http: HttpClient) {
  }

  get(personId: number): Observable<any> {
    return this.http.get(`${this.url}/${personId}`);
  }

  public getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  public addPerson(person: Person): Observable<any> {
    var body = {
      name: person.name,
      lastName: person.lastName,
      sex: person.sex,
      birthDate: person.birthDate
    }

    return this.http.post(this.url, body);
  }

  public updatePerson(person: Person): Observable<any> {
    var body = {
      id: person.id,
      name: person.name,
      lastName: person.lastName,
      sex: person.sex,
      birthDate: person.birthDate
    }

    return this.http.put(this.url, body);
  }

  public deletePerson(personId: number): Observable<any> {
    return this.http.delete(`${this.url}/${personId}`);
  }
}