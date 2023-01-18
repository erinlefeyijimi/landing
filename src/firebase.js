import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3mDkuQroQU7FcMd_OsBgWhrghMypcRCs",
  authDomain: "shestel-blog.firebaseapp.com",
  projectId: "shestel-blog",
  storageBucket: "shestel-blog.appspot.com",
  messagingSenderId: "420524042993",
  appId: "1:420524042993:web:752f59ad09afe785c99750",
  measurementId: "G-VVZJEYTRCE"
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//     appId: process.env.REACT_APP_APP_ID
//   };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };



//rules to use
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }