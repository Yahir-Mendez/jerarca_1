import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIhN-m3jyTu70bYXOcEsu5Bf9zAouZ-iQ",
    authDomain: "jerarca-1.firebaseapp.com",
    projectId: "jerarca-1",
    storageBucket: "jerarca-1.firebasestorage.app",
    messagingSenderId: "865146006979",
    appId: "1:865146006979:web:3081cb6ce1fe26d3452176",
    measurementId: "G-WWH5E2XLZ8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);