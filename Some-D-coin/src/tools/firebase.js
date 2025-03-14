import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDcBksSTpx4FJLJMZnTQkffZvo2aAmSLqQ",
  authDomain: "dcode-4f570.firebaseapp.com",
  projectId: "dcode-4f570",
  storageBucket: "dcode-4f570.firebasestorage.app",
  messagingSenderId: "880726837555",
  appId: "1:880726837555:web:243d9dac99f74c3f0b9646",
  measurementId: "G-GF96H99JQD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async (apiURL) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const idToken = await user.getIdToken(); // Get Firebase ID token

    // Send token to backend for verification
    var { data: axres } = await axios.post(apiURL, { token: idToken });
    if (!axres.status) {
      return toast.error(axres.message);
    }
    toast.success(axres.message);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

export { auth, signInWithGoogle };
