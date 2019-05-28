import { NotificationType } from "../enums/notification-type.enum";

/**
 * Comon used in notification component, service and GlobalErrorHandle
 */
export interface NotificationStructure {
  message: string;
  type?: NotificationType;
}
