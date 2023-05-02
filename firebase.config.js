// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlAoM5nXP3oA3nclUJF6qHDzmvWKKWtDc",
  authDomain: "ai-10-spice-house.firebaseapp.com",
  projectId: "ai-10-spice-house",
  storageBucket: "ai-10-spice-house.appspot.com",
  messagingSenderId: "258387031201",
  appId: "1:258387031201:web:c7a5c206529aba62a4ece0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;