// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect,signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLfKWHRwae5KsGp6nMYBxlQzDzDd9k8ZY",
  authDomain: "crwn-clothing-db-3138e.firebaseapp.com",
  projectId: "crwn-clothing-db-3138e",
  storageBucket: "crwn-clothing-db-3138e.appspot.com",
  messagingSenderId: "1032144506488",
  appId: "1:1032144506488:web:70e20d387b85d227d4e78d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider); 
export const signOutUser = () => signOut(auth);
export const db = getFirestore();

export const createUserDocFromAuth = async (
  authUser, 
  additionalInformation 
  = {})=> {
  
  const userDocRef = doc(db,'users',authUser.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    //if user snapshot doesnt exist
    //create and set the doc for the user
    const { displayName, email } = authUser;
    const createdDate = new Date();
    try {
      await setDoc(userDocRef, {
        //what to set at the reference provided
        displayName,
        email,
        createdDate,
        ...additionalInformation
      })
    } catch (error) {
      console.log(`error creating user: ${error}`)
    }
    return userDocRef;
  }
};

export const createAuthUserFromForm = async (email, password) =>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserFromForm = async (email, password) =>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

export const onAuthStateChangedListener = (callback)=> {
  onAuthStateChanged(auth, callback)
}