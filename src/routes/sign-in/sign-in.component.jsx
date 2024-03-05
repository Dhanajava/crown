import { signInWithGooglePopup ,CreateUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn =() =>{
    
  const logGoogleUser = async() =>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await CreateUserDocumentFromAuth(user)
  } 
    return(
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
        

    )
}

export default SignIn