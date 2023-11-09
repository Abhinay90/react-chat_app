import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyATs02vC2MGb8CCbQWUdrih6bFD3tvNX3Y",
  authDomain: "chatapp-1d876.firebaseapp.com",
  databaseURL: "https://chatapp-1d876-default-rtdb.firebaseio.com",
  projectId: "chatapp-1d876",
  storageBucket: "chatapp-1d876.appspot.com",
  messagingSenderId: "115618339246",
  appId: "1:115618339246:web:bc1f640a45cf429cb3d03f",
  measurementId: "G-T25T3MMDMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

