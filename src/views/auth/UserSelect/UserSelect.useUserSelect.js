import { User } from 'gotrue-js';
import { useState } from 'react';
import { useMount } from 'react-use';
import { users } from '../../../api/users'
import { user } from '../../../types/User'
export const useUserSelect = () => {
    /**
     * @type {[User[], (newUser: User[]) => void]}
     * 
     */

    const [localUsers, setLocalUser] = useState([])

    useMount(async () => {
        const response = await users.getUsers();
        setLocalUser(response)
    })

    return {
       localUsers
    }
}

export default useUserSelect