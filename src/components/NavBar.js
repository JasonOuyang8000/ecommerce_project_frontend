import { Box, Link } from '@chakra-ui/react'
import { useContext } from 'react'
import { Link as ReactLink, useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function NavBar() {
    const history = useHistory()

    const {user, setUser} = useContext(UserContext);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('usertoken');
    }

    return (
        <Box bg='tomato' w='100%'>
            <Link as={ReactLink} to='/'>Home</Link>
            <Link as={ReactLink} to='/products'>Browse</Link>
            <span className='userNavLinks'>
                {user === null ? 
                <>
                <Link as={ReactLink} to='/user/signup'>Sign Up</Link>
                <Link as={ReactLink} to='/user/login'>Login</Link>
                </>
                    :
                <Link as={ReactLink} to={history} onClick={handleLogout}>Logout</Link>
            }
       

                
            </span>
        </Box>
    )
}

export default NavBar