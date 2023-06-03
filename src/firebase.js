import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVZePkdLf5zOQyTpUbhZqGao0jvGQVpjM",
  authDomain: "crud-3987d.firebaseapp.com",
  projectId: "crud-3987d",
  storageBucket: "crud-3987d.appspot.com",
  messagingSenderId: "890845844235",
  appId: "1:890845844235:web:777ca3722f9360509dc80e"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);