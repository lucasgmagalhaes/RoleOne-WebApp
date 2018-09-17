

/**
 * Represents the route in firebase database
 * @link  https://firebase.google.com/docs/database/web/structure-data?hl=en
 * @description This enum was created to avoid duplication of database route declarations.
 * All routes already have the '/' at the end of the value. So, isn't necessary add it to the final route
 */
export enum DataRoute {
  USERS = "users/"
}
