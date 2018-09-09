import { Injectable } from "@angular/core";

/**
 * @description Provides a simple utility for open and close modals.
 * @since 1.0.0
 */
@Injectable({
  providedIn: "root"
})
export class ModalService {
  constructor() {}

  open(elementId: string) {
    document.getElementById(elementId).classList.add("is-active");
  }

  close(elementId: string) {
    document.getElementById(elementId).classList.remove("is-active");
  }
}
