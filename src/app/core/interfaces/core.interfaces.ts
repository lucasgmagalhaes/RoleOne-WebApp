import { NotificationType } from "../enums/core.enums";

/**
 * Comon used in notification component, service and GlobalErrorHandle
 */
export interface NotificationStructure {
  message: string,
  type?: NotificationType
}

/**
 * Used in general functions relationated to user, such as authentication
 */
export interface User {
  key: string,
  name: string,
  photoURL?: string
}
