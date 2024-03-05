import { initializeApp } from "firebase/app";
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { 
     getFirestore,
     doc,
     getDoc,
     setDoc

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

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth=getAuth();
  export const signInWithGooglePopup =()=> signInWithPopup(auth,provider);
  export const db=getFirestore();
  export const CreateUserDocumentFromAuth = async(userAuth)=>{
    const userDocRef = doc(db,"users",userAuth.uid);
    const userSnapShot=await getDoc(userDocRef);

  if(!userSnapShot.exists()){
    const {displayname,email}=userAuth;
    const createAt=new Date();

    try{
      await setDoc(userDocRef,{
        displayname,
        email,
        createAt
      });
    }catch(error){

    }
  }

  return(userDocRef)


    //if user data exist


    //if the user data does not exist


    //return userDocRef
  }