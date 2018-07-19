import { ErrorHandler } from "../../../../node_modules/@angular/core";

/**
 * Responsable for the last treatment of erros invocation of the application.
 * Display the error component into the screen and or on console.
 * Component display can be disabled.
 */
export class GlobalErrorHandle implements ErrorHandler {
  handleError(error: Error): void {
    console.error(error.name + error.message + error.stack);
  }

}
