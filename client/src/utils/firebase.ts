import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD8qnVobvMu_2gaVyHKOedN8ixVuT2q-Ss",
  authDomain: "futureflyer-b01d7.firebaseapp.com",
  projectId: "futureflyer-b01d7",
  storageBucket: "futureflyer-b01d7.appspot.com",
  messagingSenderId: "1092616954591",
  appId: "1:1092616954591:web:7328cfea519b6e9f40ff6a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);