import { Layout } from '../../../components/Layout'
import { useUserSelect } from './UserSelect.useUserSelect'
import "../../../types/User"
export const UserSelect = () => {
      const { localUsers } = useUserSelect();

    return <Layout secondary={['Cancel', '/']} 
    primary={['User not listed', '/auth/signin']} title="Sign In" >
        {localUsers.map(({ id, email,image, name, type }) => (
            <div>{name}</div>
        ))}
    </Layout>
}

export default UserSelect