import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import { signUpStart } from "../../store/user/user-action";

import './sign-up-form.scss';
import Button from "../button/button.components"
const defaultFormFields={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"",
}


const SignUpForm =()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {displayName,email, password,confirmPassword}=formFields;
    const dispatch = useDispatch();

    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
    }

const handleSubmit=async(event)=>{
    event.preventDefault();

    if(password !== confirmPassword){
        alert("Password Do Not Match")
        return;
    }
    try{
       dispatch(signUpStart(email, password, displayName))
        resetFormFields();
    }catch(error){
        if(error.code === 'auth/email-already-in-use'){
            alert("Email Already Exists")
        }else{
            console.log("user creation",error);
        }
      
    }
}

const handleChange=(event)=>{
  const{name,value}=event.target;

  setFormFields({...formFields,[name]:value})
};

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>SignUp with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button buttonType="inverted" type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm