/**
 * Container of static messages used in database services.
 */
export enum ErrorMessages {
  OBJ_PARAM_UNDEFINED = "Undefined value for parameter object",
  OBJ_ALREADY_REGISTERED = "Object is already registred",
  OBJ_NO_KEY = "Object has no propertie key defined"
}

/**
 * Represents the types of notifications possibles to use.
 * All they are classess provided by Bulma css Framework.
 * @link https://bulma.io/
 */
export enum NotificationType {
  /**Notification with no style */
  DEFAULT = "",
  /** Red notification. Often used for erro messages */
  ERROR = "is-danger",
  /** Light blue-green notification. Can be used for info messages*/
  LIGHT_INFO = "is-primary",
  /** Dark blue notification. Can be used for info messages */
  DARK_INFO = "is-link",
  /** Normal blue notification. Most common for info messages*/
  INFO = "is-info",
  /** Green notification. Used for successful actions */
  SUCESS = "is-success",
  /** Yellow notification. Used for something that is not totally right */
  WARNING = "is-warning"
}

/**
 * Represents the route in firebase database
 * @link  https://firebase.google.com/docs/database/web/structure-data?hl=en
 * @description This enum was created to avoid duplication of database route declarations.
 * All routes already have the '/' at the end of the value. So, isn't necessary add it to the final route
 */
export enum DataRoute {
  USERS = "users/"
}
