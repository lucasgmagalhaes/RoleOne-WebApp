import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

/**
 * Responsable to send the messages to notification component
 */
@Injectable({
  providedIn: "root"
})
export class NotificationService {
  /**
   * Responsable to send a message for who subscribe it
   */
   notifier = new BehaviorSubject('');
  constructor() {}

  /**
   * it is publishing this value to all the subscribers that have already subscribed to this message
   */
  setNotification(message: string) {
    this.notifier.next(message);
  }

  getNotification(): Observable<string> {
    return this.notifier.asObservable();
  }
}
