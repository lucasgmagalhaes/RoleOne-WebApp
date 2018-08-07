import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from "../models/location.model";
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  /**
   * Provide all informations about the location of the user.
   * Uses http://ip-api.com/ for consult the information
   */
  getLocation(): Observable<Location> {
    return this.http.get<Location>("http://ip-api.com/json");
  }

}
