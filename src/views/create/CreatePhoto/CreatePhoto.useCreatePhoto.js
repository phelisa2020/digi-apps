import { useState } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-use';
import { users } from '../../../api/users'
/**
 * 
 * @typedef {'display' | ' editing'} phase
 */

export const useCreatePhoto = () => {
    const history = useHistory();
    const { state } = useLocation()

    if(!state || !state.name) history.push('/create/name')

    console.log(state + "ghudj")

    /**
     * @type {[phase, (newPhase: phase) => void]
     }
     */

    const [phase, setPhase] = useState('empty');
    const [image, setImage] = useState(null)
    const [alert, setAlert] = useState(null)

    const save = async ( ) => {
        if (!image)  return setAlert("noImage")
        setAlert('saving')

        await users.createLocalAccount(state.name, image)
        history.push('/create/sync')    
    }

    const uploadImage = ([file]) => {
        setImage(file)
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
        image: image && URL.createObjectURL(image),
        alert,
        save,
    }
}

export default useCreatePhoto;