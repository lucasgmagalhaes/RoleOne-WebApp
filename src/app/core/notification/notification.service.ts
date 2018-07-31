import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { NotificationType } from "../enums/core.enums";
import { NotificationStructure } from '../interfaces/core.interfaces';

/**
 * Responsable to send the messages to notification component
 * @link https://gitlab.com/roleone/webapp/wikis/core/notifications
 */
@Injectable({
  providedIn: "root"
})
export class NotificationService {
  /**
   * Responsable to send a message for who subscribe it
   */
  private notifier = new BehaviorSubject<NotificationStructure>({message: '', type: NotificationType.DEFAULT});
  constructor() {}

  /**
   * it is publishing this value to all the subscribers that have already subscribed to this message
   */
  setNotification(_message: string, _type?: NotificationType) {
    this.notifier.next({ message: _message, type: _type });
  }

  /**
   * Return the setted message with his type, as a Observable
   */
  getNotification(): Observable<NotificationStructure> {
    return this.notifier.asObservable();
  }
}
