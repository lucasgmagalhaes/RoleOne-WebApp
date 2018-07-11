import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private firebase: AngularFireDatabase) { }

  /**
   * Persists the object into the database, returning it with his Id
   */
  public create(entity: Object, route: string): void {
    let path = this.firebase.list(route);
    path.push(entity);
  }

}
