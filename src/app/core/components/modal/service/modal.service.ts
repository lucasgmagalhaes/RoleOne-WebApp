import { Injectable, EventEmitter } from "@angular/core";

/**
 * @description Provides a simple utility for open and close modals.
 * @since 1.0.0
 */
@Injectable({
  providedIn: "root"
})
export class ModalService {
  private saveEmittion = new EventEmitter<string>(undefined);
  private closeEmittion = new EventEmitter<string>(undefined);
  private cancelEmittion = new EventEmitter<string>(undefined);

  open(elementId: string): void {
    document.getElementById(elementId).classList.add("is-active");
  }

  close(elementId: string): void {
    document.getElementById(elementId).classList.remove("is-active");
  }

  onSave(id: string): void {
    this.saveEmittion.emit(id);
  }

  onClose(id: string) {
    this.closeEmittion.emit(id);
  }

  onCancel(id: string) {
    this.cancelEmittion.emit(id);
  }

  getSaveEmitter(): EventEmitter<string> {
    return this.saveEmittion;
  }

  getCloseEmitter(): EventEmitter<string> {
    return this.closeEmittion;
  }

  getCancelEmitter(): EventEmitter<string> {
    return this.cancelEmittion;
  }
}
