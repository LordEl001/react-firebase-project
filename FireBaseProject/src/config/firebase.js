import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALnuuAHUcCRtTL1hyhlk-3w0TWqhUPJdI",
  authDomain: "learning-firbase-fc847.firebaseapp.com",
  projectId: "learning-firbase-fc847",
  storageBucket: "learning-firbase-fc847.firebasestorage.app",
  messagingSenderId: "156814545759",
  appId: "1:156814545759:web:454121ccda1a6e718c5cea",
  measurementId: "G-6H65WSMP2H",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
