import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  url = "https://swapi.dev/api";

  constructor(public http: HttpClient) { }

  searchPeoples() {
    return this.http.get(`${this.url}/peoples`);
  }

  searchPeoplesById(url: string) {
    return this.http.get(url);
  }
}
