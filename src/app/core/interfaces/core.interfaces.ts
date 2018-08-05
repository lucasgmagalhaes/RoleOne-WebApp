import { NotificationType } from "../enums/core.enums";

/**
 * Comon used in notification component, service and GlobalErrorHandle
 */
export interface NotificationStructure {
  message: string;
  type?: NotificationType;
}
