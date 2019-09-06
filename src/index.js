import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbORJSEm9-L5_ylCTEmRZxA9ox3a_y7-c",
  authDomain: "mystoragedemo34.firebaseapp.com",
  databaseURL: "https://mystoragedemo34.firebaseio.com",
  projectId: "mystoragedemo34",
  storageBucket: "mystoragedemo34.appspot.com",
  messagingSenderId: "36139390569",
  appId: "1:36139390569:web:a0e0726f6f5b3236c7f4f8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
