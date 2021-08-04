import { useState } from "react";
import validator from "validator";

export const useNewAccount = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [alert, setAlert] = useState(null)
    const [creating, setCreating] =useState(false)

    const createAccount = () => {
        if(!email || email.length < 1) return ('noEmail')
        if(!password || password.length < 1) return ('noPassword')
        if(!confirmPassword || confirmPassword.length < 1) return ('noConfirmPassword')
    
        if(!validator.isEmail(email)) return setAlert('formatEmail')
        if(password.length < 8) return ('shortPassword')
        if(confirmPassword.length < 8) return ('shortConfirmPassword')
    
        if(password !== confirmPassword) return setAlert("missmatchPassword")
        setAlert('creating')
    }

    return {
        email,
        password,
        confirmPassword,
        setConfirmPassword,
        setEmail,
        setPassword,
        createAccount,
    }

}

export default useNewAccount