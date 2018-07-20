import { Injectable, EventEmitter } from '@angular/core';

/**
 * Responsable to send the messages to notification component
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  /**
   * Responsable to send a message for who subscribe it
   */
  notifier = new EventEmitter<string>();
  constructor() { }

  /**
   * Send a message for who subscribe the EventEmitter
   */
   notify(message: string){
    this.notifier.emit(message);
    this.notifier.subscribe(val => console.log(val))
  }
}
