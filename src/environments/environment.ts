// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //Pegar aquí
  //Mi bd
  //   firebaseConfig: {
  //   apiKey: "AIzaSyDVyX1qLmgiIiauq0Xrxf2qX8Z0V-Mamjk",
  //   authDomain: "jardin-garcia.firebaseapp.com",
  //   databaseURL: "https://jardin-garcia-default-rtdb.firebaseio.com",
  //   projectId: "jardin-garcia",
  //   storageBucket: "jardin-garcia.appspot.com",
  //   messagingSenderId: "275880468917",
  //   appId: "1:275880468917:web:678c7bce81f35297df39fc"
  // }


  //bd de Donovan
  firebaseConfig: {
    apiKey: "AIzaSyDTgNteopIS2Qi8MtZMzUX4pc1Rly1KJEg",
    authDomain: "jardin-vilchis.firebaseapp.com",
    databaseURL: "https://jardin-vilchis-default-rtdb.firebaseio.com",
    projectId: "jardin-vilchis",
    storageBucket: "jardin-vilchis.appspot.com",
    messagingSenderId: "76835308696",
    appId: "1:76835308696:web:a310d4cf1f69a836063ced"
  }


  
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
