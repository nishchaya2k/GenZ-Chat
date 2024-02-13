import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASJCwBoIqTO9nQEJLzMbrwbNg_Aj_iaMg",
    authDomain: "genz-chat-8008c.firebaseapp.com",
    projectId: "genz-chat-8008c",
    storageBucket: "genz-chat-8008c.appspot.com",
    messagingSenderId: "253339595704",
    appId: "1:253339595704:web:21ae24ec1784033a19954d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
