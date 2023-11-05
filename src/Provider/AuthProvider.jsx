import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../config_firebase';


export const AuthContext=createContext();
const auth=getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [user, setUser] = useState();
const [loading, setLoading] = useState(true);

const createUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
};
const loginUser = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
};
const logoutUser = () => {
  setLoading(true);
  return signOut(auth);
};
const googleLogin = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
};


useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser)
  if (currentUser) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
},[])



    const authInfo = {
      user,
      createUser,
      loginUser,
      logoutUser,
      googleLogin
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;