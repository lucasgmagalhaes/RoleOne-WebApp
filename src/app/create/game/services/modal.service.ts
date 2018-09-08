import { Injectable } from "@angular/core";

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
