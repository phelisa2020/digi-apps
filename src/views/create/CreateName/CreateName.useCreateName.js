import { useState } from 'react';
import { useHistory } from 'react-router';

export const useCreateName = () => {
    const history = useHistory();
    const [name, setName] = useState('')
    const [alert, setAlert] = useState(null)

    const save = () => {
        if (!name || name.trim() === '') return setAlert("noName")
        setAlert('saving')
        history.push({ pathname: '/create/photo', state: {name} }) 
    }

    return {
        setName,
        name,
        alert,
        save,
    }
}

export default useCreateName