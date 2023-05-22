import { initializeApp } from "firebase/app";
// getAuth 현재 접속한 사용자 인증 정보 가져오기
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL_2xtPFooQ8I8nhBmQtGN0kAaPWpRVok",
  authDomain: "fir-task-1003e.firebaseapp.com",
  projectId: "fir-task-1003e",
  storageBucket: "fir-task-1003e.appspot.com",
  messagingSenderId: "308657233097",
  appId: "1:308657233097:web:279ea80432f2783d140118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);