import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAaJJLWExwJCri5a23OArmYBmyi8yEWdk",
  authDomain: "yeliwnenshu.firebaseapp.com",
  projectId: "yeliwnenshu",
  storageBucket: "yeliwnenshu.firebasestorage.app",
  messagingSenderId: "974574141750",
  appId: "1:974574141750:web:33eeec93927ff3d3837397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
