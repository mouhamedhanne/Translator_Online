// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzNy32j3Bqwaa8TSvoFz-5xS6FwuR1PqI",
  authDomain: "online-translator-c9c4e.firebaseapp.com",
  projectId: "online-translator-c9c4e",
  storageBucket: "online-translator-c9c4e.appspot.com",
  messagingSenderId: "144046600902",
  appId: "1:144046600902:web:1a4f09da06385c12c55dc7",
  measurementId: "G-Z1YMX8HGH7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
