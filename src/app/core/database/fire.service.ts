import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  QueryFn,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import { database } from "firebase/app";
import 'firebase/database';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { ErrorMessages } from "../enums/core.enums";
/**
 * @class FireService
 * @see angularfire2 - AngularFireDatabase
 * @link none
 * @constructor AngularFire2 version: v5.0.0-rc.11
 * @description This class is a abstraction of angularFire2 AngularFireDatabasemethods.
 * It provkeyes all services that the own angularFire2 does for a CRUD implementation,
 * but provkeyes a reduction of used code for the application. For all methods, their
 * return are the same as the primary methods. As the own encapsulation says, this
 * services provkeyes firebase functions only.
 *
 * **Obs: This methods do not alter the primary methods of angularfire authentication.**
 */
@Injectable({
  providedIn: "root"
})
export class FireService {
  private resource: string = "/";
  private readonly KEY: string = "key";
  constructor(private db: AngularFireDatabase) {}

  /**
   *  Defines the resource for all CRUD operations in Firebase database. Resource default value is ''
   * @param resource
   * @throws Error if resource be undefined
   */
  setResource(resource: string): void {
    if (resource !== undefined) {
      this.resource = resource;
    }
  }

  /**
   * Returns the actual value of the resource
   */
  getResource(): string {
    return this.resource;
  }

  /**
   * Persists the object into the database without set the generated key in the objects
   *
   * @param object entity to be persisted
   * @return response of the database(database.ThenableReference)
   * @throws Error if object or route be undefined
   */
  create(
    object: Object | Object[],
    _resource?: string
  ): database.ThenableReference {
    if (object !== undefined) {
      if (object instanceof Array) {
        return this.insertList(object, _resource);
      } else {
        return this.insertObj(object, _resource);
      }
    } else {
      //Object undefined
      throw new SyntaxError(ErrorMessages.OBJ_PARAM_UNDEFINED);
    }
  }

  private insertObj(
    object: Object,
    _resource?: string
  ): database.ThenableReference {
    if (_resource === undefined) {
      delete object[this.KEY];
      return this.db.list(this.resource).push(object);
    } else {
      delete object[this.KEY];
      return this.db.list(_resource).push(object);
    }
  }

  private insertList(
    object: Object[],
    _resource?: string
  ): database.ThenableReference {
    let objSingleReturn: database.ThenableReference;
    if (_resource === undefined) {
      object.forEach(obj => {
        delete obj[this.KEY];
        objSingleReturn = this.db.list(this.resource).push(obj);
      });
    } else {
      object.forEach(obj => {
        delete obj[this.KEY];
        objSingleReturn = this.db.list(_resource).push(obj);
      });
    }
    return objSingleReturn;
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
  createWithKey(object: Object | Object[]): database.ThenableReference {
    if (object !== undefined) {
      let objReturn: database.ThenableReference;

      if (object instanceof Array) {
        object.forEach(function(obj) {
          delete obj[this.KEY];
          objReturn = this.db
            .list(this.resource)
            .push(obj)
            .then(creation => {
              if (object.hasOwnProperty(this.KEY)) {
                if (object[this.KEY] === undefined || object[this.KEY] === "") {
                  object[this.KEY] = creation.key;
                } else {
                  //Key already defined
                  throw new Error(ErrorMessages.OBJ_ALREADY_REGISTERED);
                }
              } else {
                throw new Error(ErrorMessages.OBJ_NO_KEY);
              }
            });
        });
        return objReturn;
      } else {
        if (object.hasOwnProperty(this.KEY)) {
          if (object[this.KEY] === undefined || object[this.KEY] === "") {
            delete object[this.KEY];
            this.db
              .list(this.resource)
              .push(object)
              .then(response => {
                object[this.KEY] = response.key;
              });
          } else {
            throw new Error(ErrorMessages.OBJ_ALREADY_REGISTERED);
          }
        } else {
          throw new Error(ErrorMessages.OBJ_NO_KEY);
        }
        return objReturn;
      }
    } else {
      throw new Error(ErrorMessages.OBJ_PARAM_UNDEFINED);
    }
  }

  /**
   * Gets a list of entities based on a route and a query, if informed.
   *
   * @param query no required. Used to filter the entities
   * @return list of entites(Observable[])
   * @throws Error if route is undefined
   * @type T
   */
  find<T>(route?: string): AngularFireObject<T> {
    if (route !== undefined) {
      return this.db.object<T>(route);
    } else {
      return this.db.object<T>(this.resource);
    }
  }

  /**
   * Return a list of data with their respective key.
   *
   * @param query Not required. Used to filter the data
   * @return list of entites(Observable[])
   * @throws Error if route is undefined
   */
  findWithKey(query?: QueryFn): Observable<any[]> {
    return this.db
      .list(this.resource, query)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }));
        })
      );
  }

  get(route?: string): Observable<any[]> {
    return this.db
      .list(route)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }));
        })
      );
  }

  /**
   * Update a object in the database based in his key. the object in parameter will replace values of
   * the entity properties or add more.
   *
   * @param object Object to be updated
   * @return Promisse of the update
   * @throws Error if object or some object of list of objects has no propertie 'key'.
   * if route is undefined.
   */
  update(object: Object | Object[], route?: string): Promise<void> {
    if (object !== undefined) {
      if (object instanceof Array) {
        return this.updateList(object, route);
      } else {
        this.updateObj(object, route);
      }
    } else {
      throw new Error(ErrorMessages.OBJ_PARAM_UNDEFINED);
    }
  }

  private updateList(object: Object[], route?: string) {
    let promiseReturn: Promise<void>;
    if (object === undefined) {
      throw new Error(ErrorMessages.OBJ_PARAM_UNDEFINED);
    } //Case the object isn't undefined
    object.forEach((obj, index) => {
      if (route === undefined) {
        if (obj !== undefined) {
          promiseReturn = this.db.object(this.resource).update(obj);
        } else {
          throw new Error(
            ErrorMessages.OBJ_PARAM_UNDEFINED + "at index " + index
          );
        }
      } else {
        promiseReturn = this.db.object(route).update(obj);
      }
    });
    return promiseReturn;
  }

  private updateObj(object: Object, route?: string) {
    if (route === undefined) {
      return this.db.object(this.resource).update(object);
    } else {
      return this.db.object(route).update(object);
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
   * @return promisse of the update
   * @throws Error if undefined for object of one object of the list.
   * <p>if the object/objects[] or route if undefined</p>
   */
  set(object: Object | Object[], _resource?: string): Promise<void> {
    if (object !== undefined) {
      if (object instanceof Array) {
        let promiseReturn: Promise<void>;
        this.setList(object, _resource);
        return promiseReturn;
      } else {
        return this.setObj(object, _resource);
      }
    } else {
      throw new Error(ErrorMessages.OBJ_PARAM_UNDEFINED);
    }
  }

  private setList(object: Object[], _resource?: string): Promise<void> {
    let promiseReturn: Promise<void>;
    object.forEach((obj, index) => {
      if (obj[this.KEY] !== undefined) {
        let key = obj[this.KEY];
        delete obj[this.KEY];
        if (_resource === undefined) {
          promiseReturn = this.db.object(`${this.resource}/${key}`).set(obj);
        } else {
          promiseReturn = this.db.object(_resource).set(obj);
        }
      } else {
        throw new Error(ErrorMessages.OBJ_NO_KEY + "at index: " + index);
      }
    });
    return promiseReturn;
  }

  private setObj(object: Object, _resource?: string): Promise<void> {
    let key = object[this.KEY];
    delete object[this.KEY];
    if (_resource === undefined) {
      if (object[this.KEY] !== undefined) {
        return this.db.object(`${this.resource}/${key}`).set(object);
      } else {
        throw new Error(ErrorMessages.OBJ_NO_KEY);
      }
    } else {
      return this.db.object(_resource).set(object);
    }
  }
  /**
   * Remove the entire list of objects contained in the resource
   */
  deleteAll() {
    this.db.list(this.resource).remove();
  }

  /**
   * Removes objects from database. Being these objects the entire list of the path,
   * a single object or a list of them.
   *
   * @param key Removes a specific object or list of objects
   * @returns Promisse of the deletion
   * @throws Error if route or key be undefined
   */
  delete(key: string | string[] | object | object[]): any {
    let db = this.db.list(this.resource);
    let _return: Promise<void>;

    if (key !== undefined) {
      if (key instanceof Array) {
        /*
          * For avoid cast compatibility exception
          * the array of 'any' is converted to array of string
          */
        (key as string[]).forEach((k, index) => {
          if (typeof k === "string") {
            _return = db.remove(`/${this.resource}/${k}`);
          } else if (typeof k === "object") {
            if (k[this.KEY] !== undefined) {
              _return = db.remove(`/${this.resource}/${k[this.KEY]}`);
            } else {
              throw new Error(ErrorMessages.OBJ_NO_KEY + "at index: " + index);
            }
          }
        });
        return _return;
      } else {
        if (typeof key === "string") {
          return db.remove(key);
        } else if (key[this.KEY] !== undefined) {
          _return = db.remove(`/${this.resource}/${key[this.KEY]}`);
        } else {
          throw new Error(ErrorMessages.OBJ_NO_KEY);
        }
      }
    } else {
      throw new Error(ErrorMessages.OBJ_NO_KEY);
    }
  }
}
