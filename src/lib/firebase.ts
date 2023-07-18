
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnn2GFOVwg0hyeAh3bvX1dDRUx6ORGrKM",
  authDomain: "tech-net-d9729.firebaseapp.com",
  projectId: "tech-net-d9729",
  storageBucket: "tech-net-d9729.appspot.com",
  messagingSenderId: "425958249248",
  appId: "1:425958249248:web:70aabe80bb013e290c3d45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);