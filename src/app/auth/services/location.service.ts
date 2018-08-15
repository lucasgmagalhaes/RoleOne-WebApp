import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Location } from "../models/location.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  constructor(private http: HttpClient) {}

  /**
   * Provide all informations about the location of the user.
   * Uses http://ip-api.com/ for consult the information
   */
  getLocation(): Promise<Location> {
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", "*");
    return this.http
      .get<Location>(`https://ipapi.co/json/`, { headers: header })
      .toPromise();
  }

  getIp(): Promise<string> {
    return this.http.get<string>("https://ip4.seeip.org").toPromise();
  }
}
