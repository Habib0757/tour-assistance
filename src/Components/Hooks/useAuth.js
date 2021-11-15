import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
// use context
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
