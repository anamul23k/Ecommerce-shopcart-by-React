import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCAg6LV3yOe3qpykIQfY5MyccZL18lKttk",
  authDomain: "shopcart-a413a.firebaseapp.com",
  projectId: "shopcart-a413a",
  storageBucket: "shopcart-a413a.appspot.com",
  messagingSenderId: "157371596833",
  appId: "1:157371596833:web:b0caec23acb6cd78b0e360",
  measurementId: "G-V3KNVS77RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
