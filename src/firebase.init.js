// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB42GNX80Z6_lT27_IgQCWpLg0j0Zs4X00",
  authDomain: "entropylab-7fc14.firebaseapp.com",
  projectId: "entropylab-7fc14",
  storageBucket: "entropylab-7fc14.appspot.com",
  messagingSenderId: "1081127036772",
  appId: "1:1081127036772:web:b98ed10820c532263b7c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
