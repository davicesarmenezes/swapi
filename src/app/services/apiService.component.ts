import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url = "https://swapi.dev/api/"

  constructor(public http: HttpClient) { }

  buscarFilms() {
    return this.http.get(this.url + "films");
  }
  buscarPeoples() {
    return this.http.get(this.url + "people");
  }
  buscarPlanets() {
    return this.http.get(this.url + "planets");
  }
  buscarSpecies() {
    return this.http.get(this.url + "species");
  }
  buscarStarships() {
    return this.http.get(this.url + "starships");
  }
  buscarVehicles() {
    return this.http.get(this.url + "vehicles");
  }
}
