import { useState } from 'react';
import { useHistory } from 'react-router';
import CreateEmail from '.';

export const useCreateEmail = () => {
    const history = useHistory();
    const [name, setName] = useState('')
    const [alert, setAlert] = useState(null)

    const save = ( ) => {
        if (!name || name.trim() === '') return setAlert(" noName")
        history.push('/auth/photo') 
    }

    return {
        setName,
        name,
        alert,
        save,
    }
}

export default useCreateEmail