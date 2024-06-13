import { FirebaseOptions, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCC0dwHDvsua0UqA4to28unaV4uJ5uXZLw",
  authDomain: "ziqzi-chat.firebaseapp.com",
  projectId: "ziqzi-chat",
  storageBucket: "ziqzi-chat.appspot.com",
  messagingSenderId: "91246742131",
  appId: "1:91246742131:web:fe3d9e1a7e5021b83bb806",
  databaseURL: "https://ziqzi-chat-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
