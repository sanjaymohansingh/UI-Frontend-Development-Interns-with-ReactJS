import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFdIAUXf5952m0rPRxACO3vL3-HcoK_mI",
  authDomain: "react-chat-app-b6f61.firebaseapp.com",
  databaseURL: "https://react-chat-app-b6f61-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-b6f61",
  storageBucket: "react-chat-app-b6f61.appspot.com",
  messagingSenderId: "442223100411",
  appId: "1:442223100411:web:b984f60c156dae7e814b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
