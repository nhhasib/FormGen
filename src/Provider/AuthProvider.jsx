import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../../config_firebase';


export const AuthContext=createContext();
const auth=getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


    const authInfo={

    }
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;