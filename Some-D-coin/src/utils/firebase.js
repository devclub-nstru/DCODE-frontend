import axiosInstance from "./axiosConfig";
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

const signInWithGoogle = async (
  apiURL,
  setisLogin,
  setIsOpen,
  callbackUpdateUser
) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const idToken = await user.getIdToken();

    var { data: axres } = await axiosInstance.post(apiURL, { token: idToken });
    if (!axres.status) {
      return toast.error(axres.message);
    }
    localStorage.setItem("token", axres.token);
    setisLogin(true);
    toast.success(axres.message);
    callbackUpdateUser();
  } catch (error) {
    setisLogin(false);
    console.error("Google Sign-In Error:", error);
  }
  setIsOpen(false);
};

export { auth, signInWithGoogle };
