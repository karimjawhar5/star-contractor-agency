import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD8emC50jV2_ZnsCdBlpIDAb54Ku_9_pXg",
    authDomain: "star-contractor-web-agency.firebaseapp.com",
    projectId: "star-contractor-web-agency",
    storageBucket: "star-contractor-web-agency.appspot.com",
    messagingSenderId: "1025435588330",
    appId: "1:1025435588330:web:52c78ecd17c8c5637a2993",
    measurementId: "G-KK6SFMDY1P"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);

export {db};
