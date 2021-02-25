import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Person } from 'src/app/core/models/person';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  private readonly url = '/api/people';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  public addPerson(person: Person): Observable<any> {
    return this.http.post(this.url, person);
  }

  public deletePerson(personId: number): Observable<any> {
    const params = new HttpParams().set('id', personId.toString());
    return this.http.delete(this.url, { params });
  }
}