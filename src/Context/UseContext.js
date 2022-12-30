import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from "../Firebase-config/Firebase.config";

export  const AuthContext = createContext()
const googlrProvider = new GoogleAuthProvider();
const auth = getAuth(app)
const UseContext = ({children}) => {
    const [data,setData]= useState()
const [user,setUsers]= useState()
const [loader,setLoader]= useState(true);


// new user Create
const newUserCreate= (email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password);
}
// log in page 
const logInPage = (email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// log out ------
const logOutsPage = ()=>{
    setLoader(true)

    return signOut(auth);
}

// ---------------------
// google sign in-
const googleSignInAccoun = ()=>{
    setLoader(true)
    return signInWithPopup(auth,googlrProvider);
}
// --------------
const ProfileUpdates = (profile)=>{
    setLoader(true)
    return updateProfile(auth.currentUser,profile)
}
// ----useEffect 
useEffect(

   ()=>{
const unsubsCriber = onAuthStateChanged(auth,currentUser=>{
    setUsers(currentUser);
    setLoader(false)
   
    return ()=>unsubsCriber();
})
    
   },[] 
)
// -------------
const allInfoData = {user,loader,setLoader,newUserCreate,googleSignInAccoun,ProfileUpdates,logInPage,data,setData ,logOutsPage}
    return (
        <div>
            <AuthContext.Provider value={allInfoData}>
                {children}
            
            </AuthContext.Provider>
            
        </div>
    );
};

export default UseContext;