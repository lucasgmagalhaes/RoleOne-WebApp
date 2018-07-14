import { Injectable } from '@angular/core';
import { AngularFireDatabase, QueryFn } from "angularfire2/database";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { database } from 'firebase';
/**
 * @author lgMagalhaes
 * @see angularfire2
 * @description This class is a encapsulation of angularFire2 methods. It provides all services that
 * the own angularFire2 does, but provides a reduction of used code for the application.
 * For all methods, their return are the same as the primary methods. As the own encapsulation says, 
 * this services provides firebase functions only.
 */
@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private firebase: AngularFireDatabase) { }

  /**
   * Persists the object into the database without set the generated id in the objects
   * 
   * @param object entity to be persisted
   * @param route path in the database to the entity be persisted
   */
  createObj(object: any, route: string): database.ThenableReference {
    return this.firebase.list(route).push(object);
  }

  /**
   * Persists the array of object into the database without set the generated id in the objects
   * 
   * @param objects entities to be persisted
   * @param route path in the database to the entity be persisted
   */
  createObjs(objects: any[], route: string): database.ThenableReference[] {
    let db = this.firebase.list(route);
    let arrayReturn: database.ThenableReference[];
    objects.forEach(function (object) {
      arrayReturn.push(db.push(objects))
    })
    return arrayReturn;
  }

  /**
   * Persists a object into the database setting the his Id value. If the object does not have
   * this propertie, it is created with writable equals to false
   * 
   * @param object entity to be persisted
   * @param route path in the database to the entity be persisted
   */
  createObjWithKey(object: any, route: string): void {
    let db = this.firebase.list(route);
    if (object.hasOwnProperty('key')) {
      object['key'] = db.push(object);
    } else {
      Object.defineProperty(object, 'key', {
        value: db.push(object).key,
        writable: true
      });
    }
    return object;
  }

  /**
   * Persists a array of objects into the database setting the his Id value. If the object does not have
   * this propertie, it is created with writable equals to false
   * 
   * @param objects entities to be persisted
   * @param route path in the database to the entity be persisted
   */
  createObjsWithKey(objects: any[], route: string): void {
    let path = this.firebase.list(route);
    objects.forEach(function (object) {
      if (object.hasOwnProperty('key')) {
        object['key'] = path.push(object);
      } else {
        Object.defineProperty(object, 'key', {
          value: path.push(object).key,
          writable: true
        });
      }
    });
  }

  getList(route: string, query?: QueryFn): Observable<any[]> {
    return this.firebase.list(route, query).snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    }));
  }

  getEntity(route: string, key: string, query?: QueryFn): Observable<any[]> {
    return this.firebase.list(route + `/${key}`, query).snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    }));
  }

  /**
   * Update a object in the database based on a route. If 
   * @param object 
   * @param route 
   */
  updateObject(object: any, route: string) {
    if (object.hasOwnProperty('key') && object['key'] !== undefined) {
      console.log(this.firebase.object(`${route}/${object['key']}`))
    }
  }
}
