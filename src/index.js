import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
// import * as firebase from 'firebase';
// import 'firebase/firestore'


// const firebaseConfig = {
//   apiKey: "AIzaSyAlvdvigWULOQweu9cct4EUK_mqkX351MQ",
//   authDomain: "cart-f42e1.firebaseapp.com",
//   projectId: "cart-f42e1",
//   storageBucket: "cart-f42e1.appspot.com",
//   messagingSenderId: "802028997164",
//   appId: "1:802028997164:web:43a61a837bb83f6ffadf89"
// };
// //Imitialize Firebase
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



