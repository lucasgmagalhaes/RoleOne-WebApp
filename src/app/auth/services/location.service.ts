import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
    return new Promise<Location>((response, reject) => {
      this.getIp().pipe(
        map(ip => {
          return this.http
            .get<Location>(`https://ipapi.co/${ip}/json/`)
            .toPromise()
            .then(result => {
              console.log(result);
              response(result)

            });
        })
      );
    });
  }

  getIp(): Observable<{ ip: string }> {
    return this.http.get<{ ip: string }>("https://ip.seeip.org/jsonip?");
  }
}
