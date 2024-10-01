import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyC7xAzZRDTMS0ic4WYjKDwWSSRylzvQG8E",
  authDomain: "login-react-chatapp.firebaseapp.com",
  projectId: "login-react-chatapp",
  storageBucket: "login-react-chatapp.appspot.com",
  messagingSenderId: "701614621707",
  appId: "1:701614621707:web:df0b4b86025233b4f7730e",
  measurementId: "G-2QB16L3C3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getfirestore(app);

export { auth, db };
