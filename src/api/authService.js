import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setUser, clearUser } from  '../store/userSlice';
import { store } from '../store/store';

// Register new user
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    store.dispatch(setUser(user));
    return {status: 1, message: ""}
  } catch (error) {
    console.error("Error during registration:", error.message);
    return {status: 0, message: error.message}
  }
};

// Log in existing user
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    store.dispatch(setUser(user));
    return {status: 1, message: ""}
  } catch (error) {
    console.error("Error during login:", error.message);
    return {status: 0, message: error.message}
  }
};

// Log out user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    store.dispatch(clearUser());
  } catch (error) {
    console.error("Error during logout:", error.message);
  }
};
