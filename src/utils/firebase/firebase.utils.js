import { initializeApp } from "firebase/app";

import { getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
        } from "firebase/auth";
import { 
     getFirestore,
     doc,
     getDoc,
     setDoc,
     collection,
     writeBatch,
     query,
     getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB9dJ5J2ouvCboa4EHmvzf9Z5d3IM5M5lQ",
    authDomain: "crwn-c588f.firebaseapp.com",
    projectId: "crwn-c588f",
    storageBucket: "crwn-c588f.appspot.com",
    messagingSenderId: "583515146346",
    appId: "1:583515146346:web:b1df04582a4f534178e213"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth=getAuth();
  export const signInWithGooglePopup =()=> signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect =()=> signInWithRedirect(auth,googleProvider);
  export const db =getFirestore();
  export const addCollectionAndDocuments = async(
    collectionKey, 
    objectsToAdd,
    field) =>
   {
    const collectioRef= collection (db,collectionKey);
    const batch=writeBatch(db);

    objectsToAdd.forEach((object)=>{
      const docRef= doc(collectioRef,object.title.toLowerCase());
      batch.set(docRef,object)
    });
  
    await batch.commit();
    console.log("done")
  }
   export const getCategoriesAndDocuments=async ()=>{
    const collectioRef= collection (db,"categories");
    const q = query(collectioRef);
    
   
    const querySnapshot = await getDocs(q);
     return querySnapshot.docs.map ((docSnapshot) => docSnapshot.data())
   
   } 

  export const createUserDocumentFromAuth = async(
    userAuth,
    additionalInformation ={}
    )=>{
    if(!userAuth)return;
    
    const userDocRef = doc(db,"users",userAuth.uid);
    const userSnapShot=await getDoc(userDocRef);

  if(!userSnapShot.exists()){
    const {displayName, email}=userAuth;
    const createdAt=new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    }catch(error){
     console.log(error)
    }
  }

  return(userDocRef);
  }

  export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password)return;

  return await createUserWithEmailAndPassword(auth,email,password)
  };

  export const signInAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password)return;

  return await signInWithEmailAndPassword(auth,email,password)
  };

  export const signOutUser =async () => await signOut (auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged (auth,callback);

  export const getCurrentUser = () => {
    return new Promise((resolve,reject)=> {
      const unsubscribe = onAuthStateChanged(
        auth,
        (userAuth) => {
          unsubscribe();
          resolve(userAuth)
        },
        reject
      )
    })
  }