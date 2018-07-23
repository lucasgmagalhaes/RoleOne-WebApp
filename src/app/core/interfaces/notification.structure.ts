import { NotificationType } from "../enums/notification.enum";

export interface NotificationStructure {
  message: string,
  type?: NotificationType
}
