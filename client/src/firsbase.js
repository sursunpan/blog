import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-1c27e.firebaseapp.com",
  projectId: "blog-1c27e",
  storageBucket: "blog-1c27e.appspot.com",
  messagingSenderId: "923435536878",
  appId: "1:923435536878:web:beed08b13024189b237eff",
};

export const app = initializeApp(firebaseConfig);
