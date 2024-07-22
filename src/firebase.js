import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1LA82CJj6iNLG0uHE7umTfPbPqPsfkkA",
  authDomain: "shopping-list-app-a0b37.firebaseapp.com",
  projectId: "shopping-list-app-a0b37",
  storageBucket: "shopping-list-app-a0b37.appspot.com",
  messagingSenderId: "286807529519",
  appId: "1:286807529519:web:bd7dec113b05a1bc730eda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export{ auth , db } 