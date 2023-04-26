// import React, { createContext } from "react";
// import app from "../FirebaseInit/FireBaseInit";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// export const AuthContext = createContext(); //like  create rouuter
// const auth = getAuth(app);
// const AuthProvider = ({ children }) => {
//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };
//   const authInfo = {
//     createUser
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../FirebaseInit/FireBaseInit";
import { set } from "date-fns";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });

    return () => unsubscribe();
  });
  const auth = getAuth(app);
  const handleSignOut = () => {
    signOut(auth);
    setLoading(true);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    createUser,
    userLogin,
    user,
    handleSignOut,
    loading
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
