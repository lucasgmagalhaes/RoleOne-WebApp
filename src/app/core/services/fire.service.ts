import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  QueryFn,
  AngularFireList
} from "angularfire2/database";
import { database } from "firebase";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

/**
 * @class FireService
 * @see angularfire2
 * @private AngularFireDatabase
 * @description This class is a abstraction of angularFire2 AngularFireDatabasemethods.
 * It provkeyes all services that the own angularFire2 does for a CRUD implementation,
 * but provkeyes a reduction of used code for the application. For all methods, their
 * return are the same as the primary methods. As the own encapsulation says, this
 * services provkeyes firebase functions only.
 */
@Injectable({
  providedIn: "root"
})
export class FireService {
  constructor(private db: AngularFireDatabase) {}

  /**
   * Persists the object into the database without set the generated key in the objects
   *
   * @param object entity to be persisted
   * @param route path in the database to the entity be persisted
   * @return response of the database(database.ThenableReference)
   * @throws Error if object or route be undefined
   */
  create(object: Object | Object[], route: string): database.ThenableReference {
    if (object !== undefined && route != undefined) {
      let objSingleReturn: database.ThenableReference;

      if (object instanceof Array) {
        let db = this.db.list(route);
        object.forEach(obj => (objSingleReturn = db.push(obj)));
        return objSingleReturn;
      } else {
        return this.db.list(route).push(object);
      }
    } else {
      throw new Error("Parameters object and route can not be undefined");
    }
  }

  /**
   * Persists a object into the database setting the his key value. If the object does not have
   * this propertie, it is created with writable equals to false
   *
   * @param object entity to be persisted
   * @param route path in the database to the entity be persisted
   * @return response of the database(database.ThenableReference)
   * @throws Error if object already have an key.
   * if propertie 'key' of object isn't defined
   * if object/ object[] or route is undefined
   */
  createWithKey(
    object: Object | Object[],
    route: string
  ): database.ThenableReference {
    if (object !== undefined && route !== undefined) {
      let db = this.db.list(route);
      let objReturn: database.ThenableReference;

      if (object instanceof Array) {
        object.forEach(function(obj) {
          objReturn = db.push(object);
          if (object.hasOwnProperty("key")) {
            if (object["key"] === undefined) {
              object["key"] = objReturn.key;
            } else {
              throw new Error("Object is already registred");
            }
          } else {
            throw new Error("Obj has no propertie key defined");
          }
        });

        return objReturn;
      } else {
        if (object.hasOwnProperty("key")) {
          if (object["key"] === undefined) {
            object["key"] = objReturn.key;
          } else {
            throw new Error("Object is already registred");
          }
        } else {
          throw new Error("Obj has no propertie key defined");
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
   * @throws Error if route is undefined
   * @type T
   */
  find<T>(route: string, query?: QueryFn): AngularFireList<T> {
    if (route !== undefined) {
      return this.db.list<T>(route, query);
    } else {
      throw new Error("Propertie route can not be undefined");
    }
  }

  /**
   * Return a list of data with their respective key.
   *
   * @param route Path to the data
   * @param query Not required. Used to filter the data
   * @return list of entites(Observable[])
   * @throws Error if route is undefined
   */
  findWithKey(route: string, query?: QueryFn): Observable<any[]> {
    if (route !== undefined) {
      return this.db
        .list(route, query)
        .snapshotChanges()
        .pipe(
          map(changes => {
            return changes.map(c => ({
              key: c.payload.key,
              ...c.payload.val()
            }));
          })
        );
    } else {
      throw new Error("Parameter route can not be undefined");
    }
  }

  /**
   * Update a object in the database based in his key. the object in parameter will replace values of
   * the entity properties or add more.
   *
   * @param object Object to be updated
   * @param route Path to the collection of the data
   * @return Promisse of the update
   * @throws Error if object or some object of list of objects has no propertie 'key'.
   * if route is undefined.
   */
  update(object: Object | Object[], route: string): Promise<void> {
    if (object.hasOwnProperty("key") && object["key"] !== undefined) {
      if (object instanceof Array) {
        let promiseReturn: Promise<void>;

        object.forEach((obj, index) => {
          if (obj["key"] !== undefined) {
            let key = obj["key"];
            delete obj["key"];

            promiseReturn = this.db.object(`${route}/${key}`).update(obj);
          } else {
            //If an object have no key, so it can not be updated
            throw new Error("Object at index" + index + "has no key");
          }
        });

        return promiseReturn;
      } else {
        if (object["key"] !== undefined) {
          let key = object["key"];
          delete object["key"];

          return this.db.object(`${route}/${key}`).update(object);
        } else {
          throw new Error("Object has no key");
        }
      }
    } else {
      throw new Error(
        "Parameter key not defined for entity to be updated:" + object
      );
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
   * @throws Error if undefined for object of one object of the list.
   * <p>if the object/objects[] or route if undefined</p>
   */
  set(object: Object | Object[], route: string): Promise<void> {
    if (object !== undefined && route !== undefined) {
      if (object instanceof Array) {
        let promiseReturn: Promise<void>;

        object.forEach((obj, index) => {
          if (obj["key"] !== undefined) {
            let key = obj["key"];
            delete obj["key"];

            promiseReturn = this.db.object(`${route}/${key}`).set(obj);
          } else {
            throw new Error(
              "Propertie key is undefined for object at index" + index
            );
          }
        });

        return promiseReturn;
      } else {
        if (object["key"] !== undefined) {
          let key = object["key"];
          delete object["key"];

          return this.db.object(`${route}/${key}`).set(object);
        } else {
          throw new Error("Propertie key is undefined");
        }
      }
    } else {
      throw new Error("Properties key, object and route can not be undefined");
    }
  }

  /**
   * Removes objects from database. Being these objects the entire list of the path,
   * a single object or a list of them.
   *
   * @param route Path to the entities
   * @param key Not required. Removes a specific object or list of objects
   * @returns Promisse of the deletion
   * @throws Error if route be undefined
   */
  delete(route: string, key?: string | string[] | object | object[]): any {
    if (route !== undefined) {
      let db = this.db.list(route);
      let _return: Promise<void>;

      if (key !== undefined) {
        if (key instanceof Array) {
          /*
          * For avoid cast compatibility exception
          * the array of 'any' is converted to array of string
          */
          (key as string[]).forEach((k, i) => {
            if (typeof k === "string") {
              _return = db.remove(`/${route}/${k}`);
            } else if (typeof k === "object") {
              if (k["key"] !== undefined) {
                _return = db.remove(`/${route}/${k["key"]}`);
              } else {
                throw new Error('Key not defined for element at index: ' + i);
              }
            }
          });
          return _return;
        } else {
          if (typeof key === "string") {
            return db.remove(key);
          } else  if (key["key"] !== undefined) {
            _return = db.remove(`/${route}/${key["key"]}`);
          } else {
            throw new Error('Key not defined for object');
          }
        }
      } else {
        return db.remove();
      }
    } else {
      throw new Error("Parameter route can not be undefined");
    }
  }
}
