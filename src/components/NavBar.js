import { Box, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

function NavBar() {
    return (
        <Box bg='tomato' w='100%'>
            <Link as={ReactLink} to='/'>Home</Link>
            <Link as={ReactLink} to='/products'>Browse</Link>
            <span className='userNavLinks'>
                <Link as={ReactLink} to='/user/signup'>Sign Up</Link>
                <Link as={ReactLink} to='/user/login'>Login</Link>
                <Link as={ReactLink} to='/'>Logout</Link>
            </span>
        </Box>
    )
}

export default NavBar