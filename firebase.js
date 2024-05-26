import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    doc,
    serverTimestamp,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAKsuO9kJ7eC26oaV5bK4h25Y1TKhuBsdo",
    authDomain: "food-delivery-app-d6409.firebaseapp.com",
    projectId: "food-delivery-app-d6409",
    storageBucket: "food-delivery-app-d6409.appspot.com",
    messagingSenderId: "366451691854",
    appId: "1:366451691854:web:e87f9a71a4831b29fa0e1f"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {
    initializeApp,
    auth,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    db,
    collection,
    addDoc,
    query,
    where,
    getDocs,
    doc,
    getDoc,
    serverTimestamp,
    updateDoc,
};
