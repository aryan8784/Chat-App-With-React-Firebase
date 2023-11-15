import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDTVM0GFO9kfqxVOus9zivwJQXOgIeI9EA",
  authDomain: "testing-5083b.firebaseapp.com",
  projectId: "testing-5083b",
  storageBucket: "testing-5083b.appspot.com",
  messagingSenderId: "353812605931",
  appId: "1:353812605931:web:ef8be6ea9bb26f431b87ae",
  measurementId: "G-7M2D2M0Z2S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
