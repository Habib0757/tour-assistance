import React from "react";
import { createContext } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import UseFirebase from "../Hooks/UseFirebase";
// call authorization
initializeFirebase();
// use context
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // const context
  const allCOntext = UseFirebase();
  return (
    <AuthContext.Provider value={allCOntext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
