import { useState } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-use';
import {users } from '../../../api/users'
/**
 * 
 * @typedef {'display' | ' editing'} phase
 */

export const useCreatePhoto = () => {
    const history = useHistory();
    const { state } = useLocation()

    console.log(state)

    /**
     * @type {[phase, (newPhase: phase) => void]
     }
     */

    const [phase, setPhase] = useState('empty');
    const [image, setImage] = useState(null)
    const [alert, setAlert] = useState(null)

    const save = async ( ) => {
        if (!image)  return setAlert(" noImage")
        setAlert('saving')

        await users.createLocalAccount(state.name, image)

        // history.push('/create/sync') 
    
    }

    const uploadImage = ([file]) => {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl)
        setPhase('display')
    }

    const edit =() => {
        setImage(null)
        setPhase('editing')
    }
    
   

    return {
        uploadImage,
        phase,
        edit,
        image,
        alert,
        save,
    }
}

export default useCreatePhoto;