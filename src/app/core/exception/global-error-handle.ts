import { ErrorHandler } from "@angular/core";
import { NotificationService } from '../notification/notification.service';
/**
 * Responsable for the last treatment of erros invocation of the application.
 * Display the error component into the screen and or on console.
 * Component display can be disabled.
 */
export class GlobalErrorHandle implements ErrorHandler {

  constructor(private notificationService: NotificationService) {}

  handleError(error: Error): void {
    console.error(error.name + error.message + error.stack);
    this.notificationService.setNotification(error.message);
  }

}