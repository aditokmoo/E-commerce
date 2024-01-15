import { Link } from 'react-router-dom';
import { useGetUser } from '../../hooks/useAuth';
// SCSS
import styles from './UserProfile.module.scss';

export default function UserProfile() {
    const { data, isLoading } = useGetUser()

    if(isLoading) return <h2>Loading...</h2>

    console.log(data)

    return (
        <>
            <Link to='/'>Back</Link>
            <h1>Welcome to User Profile</h1>
        </>
        
    )
}