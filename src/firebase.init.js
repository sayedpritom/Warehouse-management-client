// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfgd720QayB_PcoNs78BkFrVf67s3-4_U",
  authDomain: "warehouse-eebb3.firebaseapp.com",
  projectId: "warehouse-eebb3",
  storageBucket: "warehouse-eebb3.appspot.com",
  messagingSenderId: "792258480173",
  appId: "1:792258480173:web:c48c9b15af896da2d890a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;