import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FilmService {
  url = "https://swapi.dev/api";

  constructor(public http: HttpClient) { }

  searchFilms() {
    return this.http.get(`${this.url}/films`);
  }

  searchFilmsById(id: number) {
    return this.http.get(`${this.url}/films/${id}`);
  }

  searchFilmsByDescriptions(id: number) {
    return this.http.get(`${this.url}/films/${id}`);
  }
}
