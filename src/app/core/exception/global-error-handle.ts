import { ErrorHandler, Injectable } from "@angular/core";
import { NotificationService } from "../notification/notification.service";
import { NotificationType } from "../enums/notification.enum";
/**
 * Responsable for the last treatment of erros invocation of the application.
 * Display the error component into the screen and or on console.
 * Component display can be disabled.
 */
@Injectable()
export class GlobalErrorHandle implements ErrorHandler {
  constructor(private notificationService: NotificationService) {}

  /**
   * Catchs the error throwed printing it in console and sending it to notificationService
   * @param error
   */
  handleError(error: Error): void {
    console.error(error);
    this.notificationService.setNotification(error.message, NotificationType.ERROR);
  }
}
