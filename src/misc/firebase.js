/* eslint-disable import/no-extraneous-dependencies */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyC6uLksCmZwYOyslnlgxkZJOqO0PC65Oq8",
    authDomain: "ecommerce-web-app-7634d.firebaseapp.com",
    databaseURL: "https://ecommerce-web-app-7634d-default-rtdb.firebaseio.com",
    projectId: "ecommerce-web-app-7634d",
    storageBucket: "ecommerce-web-app-7634d.appspot.com",
    messagingSenderId: "366226736054",
    appId: "1:366226736054:web:d1ab1eabcb06827e74f717"
  };

  const app = firebase.initializeApp(config); 

  export const auth = app.auth();
  export const database = app.database();
  export const storage = app.storage();