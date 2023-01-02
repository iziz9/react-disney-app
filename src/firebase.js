// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
//import "firebase/database" // firebase에서 데이터베이스 사용하고 싶을 때
//import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB03XGMC0NK737bluBgDUMLx4EtxIVevrg",
  authDomain: "react-disney-plus-app-12622.firebaseapp.com",
  projectId: "react-disney-plus-app-12622",
  storageBucket: "react-disney-plus-app-12622.appspot.com",
  messagingSenderId: "145397234450",
  appId: "1:145397234450:web:9fbf93e9d92434a59ad1cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;