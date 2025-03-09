// Import Firebase SDK (only works in modules or bundled setups)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaCdBvPxZDNEDVtE1_Q_6cCHVtwlpikLk",
  authDomain: "phoenixgpt-3fce9.firebaseapp.com",
  projectId: "phoenixgpt-3fce9",
  storageBucket: "phoenixgpt-3fce9.appspot.com",
  messagingSenderId: "1022452324896",
  appId: "1:1022452324896:web:744605fdb0b3f2f9efba45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export authentication functions
export { auth, signInWithEmailAndPassword, signOut };
