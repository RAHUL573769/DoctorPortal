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
export const AuthContext = createContext();
const auth = getAuth(app);
signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => unsubscribe();
  });
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    createUser,
    userLogin,
    user,
    signOut
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
