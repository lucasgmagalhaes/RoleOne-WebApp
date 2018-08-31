import {
  Directive,
  ElementRef,
  Output,
  HostListener,
  EventEmitter
} from "@angular/core";

@Directive({
  selector: "[clickedOut]"
})
export class ClickOutDirective {
  @Output()
  clickedOut = new EventEmitter<MouseEvent>();
  constructor(private elementRef: ElementRef) {}

  @HostListener("document:click", ["$event"])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    // Check if the click was outside the element
    console.log(event);
    if (
      targetElement &&
      !this.elementRef.nativeElement.contains(targetElement)
    ) {
      this.clickedOut.emit(event);
    }
  }
}
