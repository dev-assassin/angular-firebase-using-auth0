// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const FB_PROJECT_ID = 'angular-firebase-auth0-dd3c6';

export const environment = {
  production: false,
  auth: {
    clientId: 'YW29iGSU9QlLXCxxBI2UO918rmYIU9Fl',
    clientDomian: 'uefa.eu.auth0.com',
    audience: 'http://localhost:1337/',
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  },
  firebase: {
    apiKey: 'AIzaSyA9dYpQa3qsiRkh9xu_wplU4eh4joGQw1k',
    authDomain: `${FB_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `${FB_PROJECT_ID}.firebaseio.com`,
    projectId: FB_PROJECT_ID,
    storageBucket: `${FB_PROJECT_ID}.appspot.com`,
    messagingSenderId: '447298114268'
  },
  apiRoot: 'http://localhost:1337/'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
