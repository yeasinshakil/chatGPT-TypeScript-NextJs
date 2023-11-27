// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqE8UazyB5DC8hz0Htth22wwFhUWHoYZI",
  authDomain: "chatgpt-clone-4e9a3.firebaseapp.com",
  projectId: "chatgpt-clone-4e9a3",
  storageBucket: "chatgpt-clone-4e9a3.appspot.com",
  messagingSenderId: "874237822711",
  appId: "1:874237822711:web:ac5e47bb31cea08e16b5f2",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
