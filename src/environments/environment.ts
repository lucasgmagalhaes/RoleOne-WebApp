// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fireSettings: {
    apiKey: "AIzaSyDfB8Kdcv4u0IT_tAw0AAQ5M-DjihfV6KQ",
    authDomain: "cms-api-teste.firebaseapp.com",
    databaseURL: "https://cms-api-teste.firebaseio.com",
    projectId: "cms-api-teste",
    storageBucket: "cms-api-teste.appspot.com",
    messagingSenderId: "646368030718"
  },
  apiName: "cms-api-teste"
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
