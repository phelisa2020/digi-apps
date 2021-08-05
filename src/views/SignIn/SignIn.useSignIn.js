import { useState } from "react";
import validator from "validator";
// import { context as authContext } from "../../hooks/useAuth";

export const useSignIn = () => {
  // const { signIn: authSignIn } = useContext(authContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  
  const signIn = () => {
    if (!email || email.length < 1) return setAlert("noEmail");
    if (!password || password.length < 1) return setAlert("noPassword");

    if (!validator.isEmail(email)) return setAlert("formatEmail");
    if (password.length < 8) return setAlert("shortPassword");
  
    setAlert('checking');
    // const [success, code] = await authSignIn(email, password) 
    
    // if (!success) {
    //   return setAlert(code)
    // }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    signIn,
    alert,
  };
};

export default useSignIn;
