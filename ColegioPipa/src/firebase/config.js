// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYzT90Do9dUdH2w3K8qMAP1asxB8wz8lk",
  authDomain: "colegiopipa-7b53d.firebaseapp.com",
  projectId: "colegiopipa-7b53d",
  storageBucket: "colegiopipa-7b53d.appspot.com",
  messagingSenderId: "403882646958",
  appId: "1:403882646958:web:5a48cb94cd53c6e922fc3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); //chamando o banco de dados

export { db }; //exportando o banco de dados