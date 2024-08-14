// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL5MnzGqZ0IEJ5Lr12HdPWcrkQm5tSomg",
  authDomain: "nielit-course-d6dea.firebaseapp.com",
  projectId: "nielit-course-d6dea",
  storageBucket: "nielit-course-d6dea.appspot.com",
  messagingSenderId: "174590292790",
  appId: "1:174590292790:web:1c97c271380a3395cbb997",
  measurementId: "G-J040GW5HZM"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;