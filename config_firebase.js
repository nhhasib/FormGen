import { initializeApp } from "firebase/app";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAF2qmisAQKuyMLnGN2LnTUM9FGQ0G3DUE",
  authDomain: "login-and-register-test-8241c.firebaseapp.com",
  projectId: "login-and-register-test-8241c",
  storageBucket: "login-and-register-test-8241c.appspot.com",
  messagingSenderId: "244219697779",
  appId: "1:244219697779:web:86aee119eaa0c7bbef6806",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

