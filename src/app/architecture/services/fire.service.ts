import { Injectable } from '@angular/core';
import { AngularFireDatabase, QueryFn, AngularFireList } from "angularfire2/database";
import { database } from 'firebase';

/**
 * @author lgMagalhaes
 * @see angularfire2
 * @description This class is a encapsulation of angularFire2 methods. It provides all services that
 * the own angularFire2 does for a CRUD implementation, but provides a reduction of used code 
 * for the application. For all methods, their return are the same as the primary methods. 
 * As the own encapsulation says, this services provides firebase functions only.
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
   * @return response of the database(database.ThenableReference)
   */
  create(object: Object | Object[], route: string): database.ThenableReference {
    if (object !== undefined && route != undefined) {

      let objSingleReturn: database.ThenableReference;

      if (object instanceof Array) {

        let db = this.firebase.list(route);
        object.forEach(obj => objSingleReturn = db.push(obj));
        return objSingleReturn;

      } else {
        return this.firebase.list(route).push(object);
      }
    } else {
      throw new Error("Parameters object and route can not be undefined");
    }
  }

  /**
   * Persists a object into the database setting the his Id value. If the object does not have
   * this propertie, it is created with writable equals to false
   * 
   * @param object entity to be persisted
   * @param route path in the database to the entity be persisted
   * @return response of the database(database.ThenableReference)
   */
  createWithKey(object: Object | Object[], route: string): database.ThenableReference {
    if (object !== undefined && route !== undefined) {

      let db = this.firebase.list(route);
      let objReturn: database.ThenableReference;

      if (object instanceof Array) {

        object.forEach(function (obj) {
          objReturn = db.push(object);
          if (object.hasOwnProperty('key')) {
            if (object['key'] === undefined) {
              object['key'] = objReturn.key;
            } else {
              throw new Error("Object is already registred");
            }
          } else {
            throw new Error("Obj has no propertie 'key' defined");
          }
        });

        return objReturn;

      } else {

        if (object.hasOwnProperty('key')) {
          if (object['key'] === undefined) {
            object['key'] = objReturn.key;
          } else {
            throw new Error("Object is already registred");
          }
        } else {
          throw new Error("Obj has no propertie 'key' defined");
        }

        return objReturn;

      }
    } else {
      throw new Error("Properties objects and route can not be undefined");
    }
  }

  /**
   * Gets a list of entities based on a route and a query, if informed.
   * 
   * @param route path to the entites 
   * @param query no required. Used to filter the entities
   * @return list of entites(Observable[])
   */
  find<T>(route: string, query?: QueryFn): AngularFireList<T> {
    if (route !== undefined) {
      return this.firebase.list(route, query);
    } else {
      throw new Error("Propertie route can not be undefined");
    }
  }

  /**
   * Update a object in the database based in his key. the object in parameter will replace values of
   * the entity properties or add more.
   * 
   * @param object 
   * @param route 
   */
  update(object: Object | Object[], route: string): Promise<void> {
    if (object.hasOwnProperty('key') && object['key'] !== undefined) {
      if (object instanceof Array) {

        let promiseReturn: Promise<void>;

        object.forEach((obj, index) => {
          if (obj['key'] !== undefined) { //If an object have no Id, so it can not be updated
            promiseReturn = this.firebase.object(`${route}/${obj['key']}`).update(obj)
          } else {
            throw new Error("Object at index" + index + "has no id");
          }
        });

        return promiseReturn;

      } else {

        if (object['key'] !== undefined) {
          return this.firebase.object(`${route}/${object['key']}`).update(object);
        } else {
          throw new Error("Object has no id");
        }

      }
    } else {
      throw new Error("Parameter 'key' not defined for entity to be updated:" + object);
    }
  }

  /**
   * Set a object in the database based in his key. The object will replace all informations in the database.
   * If the object has 3 properties in the database, and the object sent to update this objetct has only 2, 
   * them the object saved in the database will now hava just these 2 properties.
   * 
   * Throws a Exception if there is no key or if the object does not exists.
   * 
   * @param object entitie to be replaced
   * @param route path to the list of entities
   * @return promisse of the update
   */
  set(object: Object | Object[], route: string): Promise<void> {
    if (object !== undefined && route !== undefined) {
      if (object instanceof Array) {

        let promiseReturn: Promise<void>;

        object.forEach((obj, index) => {
          if (obj['key'] !== undefined) {
            promiseReturn = this.firebase.object(`${route}/${obj['key']}`).set(object);
          } else {
            throw new Error("Propertie 'key' is undefined for object at index" + index);
          }
        });

        return promiseReturn;

      } else {

        if (object['key'] !== undefined) {
          return this.firebase.object(`${route}/${object['key']}`).set(object);
        } else {
          throw new Error("Propertie 'key' is undefined");
        }
      }

    }
    else {
      throw new Error("Properties key, object and route can not be undefined");
    }
  }

  /**
   * Removes objects from database. Being these objects the entire list of the path,
   * a single object or a list of them.
   * 
   * @param route Path to the entities
   * @param key Not required. Removes a specific object or list of objects
   */
  delete(route: string, key?: string | string[]): Promise<void> {
    if (route !== undefined) {

      let db = this.firebase.list(route);
      let _return: Promise<void>;

      if (key !== undefined) {
       
        if (key instanceof Array) {
          key.forEach(k => _return = db.remove(k));
          return _return;
        } else {
         return db.remove(key);
        }

      } else {
       return  db.remove();
      }
    } else {
      throw new Error("Parameter route can not be undefined");
    }
  }

}
