import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  private isactive = new BehaviorSubject<boolean>(false);
  constructor() {}

  open() {
    this.isactive.next(true);
  }

  close() {
    this.isactive.next(false);
  }

  status(): Observable<boolean> {
    return this.isactive.asObservable();
  }
}
