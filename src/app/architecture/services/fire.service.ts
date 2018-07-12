import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

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
   createObj(object: any, route: string) {
    return this.firebase.list(route).push(object);
  }

  /**
   * Persists the array of object into the database without set the generated id in the objects
   * 
   * @param objects entities to be persisted
   * @param route path in the database to the entity be persisted
   */
  createObjs(objects: any[], route: string) {
    let db = this.firebase.list(route);
    objects.forEach(function(object) {
      db.push(objects)
    });
  }

  /**
   * Persists a object into the database setting the his Id value. If the object does not have
   * this propertie, it is created with writable equals to false
   * 
   * @param object entity to be persisted
   * @param route path in the database to the entity be persisted
   */
  createObjWithKey(object: any, route: string) { 
    let db = this.firebase.list(route);
    if(object.hasOwnProperty('key')){
      object['key'] = db.push(object);
    } else{
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
  createObjsWithKey(objects: any[], route: string) { 
    let path = this.firebase.list(route);
    objects.forEach(function(object){
      if(object.hasOwnProperty('key')){
        object['key'] = path.push(object);
      } else{
        Object.defineProperty(object, 'key', {
          value: path.push(object).key,
          writable: true
         });
      }
    });
  }

  /**
   * Update a object in the database based on a route. If 
   * @param object 
   * @param route 
   */
  updateObject(object: any, route: string){
    if(object.hasOwnProperty('key') && object['key'] !== undefined){
      console.log(this.firebase.object(`${route}/${object['key']}`))
    }
  }

}
