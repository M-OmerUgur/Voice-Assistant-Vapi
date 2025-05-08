// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB22nFYLJ-HIvunMkFuLeoXeq8phWj27zY",
  authDomain: "atmaca-78215.firebaseapp.com",
  projectId: "atmaca-78215",
  storageBucket: "atmaca-78215.firebasestorage.app",
  messagingSenderId: "607023640818",
  appId: "1:607023640818:web:1151ed8ade3e85859ae06b",
  measurementId: "G-JRCNWV98FE"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)