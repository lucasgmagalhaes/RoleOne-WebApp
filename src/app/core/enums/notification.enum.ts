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
