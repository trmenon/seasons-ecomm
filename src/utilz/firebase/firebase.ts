import {initializeApp} from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7HkFLrmvv3tPajyv0GHm_RqVxj7xvssY",
    authDomain: "seasons-ecomm-db.firebaseapp.com",
    projectId: "seasons-ecomm-db",
    storageBucket: "seasons-ecomm-db.appspot.com",
    messagingSenderId: "709640758937",
    appId: "1:709640758937:web:0d44f752ef45228db4ba08"
};
  
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

// Google Auth Provider Instance
const provider = new GoogleAuthProvider();

// Setting Custom Parameters
provider.setCustomParameters({prompt: 'select_account'});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth, provider);
export const firestoreDb = getFirestore();

export const createUserDocumentFromAuth = async(userAuth: any, additionalInformation: any={})=> {
    // Creating User Document Reference
    const userDocRef = doc(
        firestoreDb,
        'users',
        userAuth?.uid
    );
    // Getting Snapshot for User Document Reference
    const userSnapshot = getDoc(userDocRef);

    // Checking existence of user
    // If does not exist
    if(! (await userSnapshot).exists()) {
        const { displayName, email, photoURL, uid} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(
                userDocRef,
                {displayName, email, photoURL, uid, createdAt, ...additionalInformation},                
            );
        }catch(err) {
            console.log('[ERROR] Createing new user schema');
            console.log(err);
        }
    };

    return userDocRef; //If user already exist in users collection of firestore
    
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string)=> {
    if(!email || !password) return;
    try{
        return await createUserWithEmailAndPassword(auth, email, password);
    }catch(error) {
        console.log('[ERROR] Createing new user schema using email and password');
        console.log(error);
    }    
}

export const signInUserWithEmailAndPassword = async (email: string, password: string)=> {
    if(!email || !password) return;
    try{
        return await signInWithEmailAndPassword(auth, email, password);
    }catch(error) {
        console.log('[ERROR] Createing new user schema using email and password');
        console.log(error);
    }    
}