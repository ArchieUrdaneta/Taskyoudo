import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCIjw1PowkFWHRAZg3rez5ecmQkWW5q7I8",
  authDomain: "taskyoudo.firebaseapp.com",
  projectId: "taskyoudo",
  storageBucket: "taskyoudo.firebasestorage.app",
  messagingSenderId: "818417522350",
  appId: "1:818417522350:web:7591124c37dd3dfad3ff3f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore

