import { useContext } from 'react'

import {
    HStack,
    Box,
    Link,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuGroup,
    MenuDivider,
    MenuItem,
    Container,
    Text
} from '@chakra-ui/react'

import {
    HamburgerIcon
} from '@chakra-ui/icons'

import { Link as ReactLink, useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const history = useHistory()

    const {user, setUser} = useContext(UserContext);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('usertoken');
    }

    return (
        <Box bg='tomato' w='100%'>
        <Container   maxW='container.xl'>
        <Box  px='5' py='1' display='flex' alignItems='center' justifyContent='space-between'>
         
            <HStack spacing='5'>
                <Link display="flex" alignItems="center" mr="6" as={ReactLink} to='/'
                    _hover={{
                        textDecoration: 'none',
                        color: 'gray.600'
                    }}>
                     
                    <Text display="inline" fontWeight="900" fontSize="20px" mr="2" color="white">Products</Text><FontAwesomeIcon color="white" size="lg" icon={faShoppingBag}/>
                </Link>
                <Link as={ReactLink} to='/'
                    _hover={{
                        textDecoration: 'none',
                        color: 'gray.600'
                    }}>
                    Home
                </Link>
                <Link as={ReactLink} to='/products'
                    _hover={{
                        textDecoration: 'none',
                        color: 'gray.600'
                    }}>
                    Browse
                </Link>
            </HStack>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='ghost'
                    _hover={{
                        background: 'tomato',
                        color: 'gray.600'
                    }}
                >
                    User
                </MenuButton>

                <MenuList>
                    <MenuGroup title='Cart'>
                        <MenuItem as={ReactLink} to='/cart'>View Cart</MenuItem>
                        <MenuItem as={ReactLink}>Checkout</MenuItem>
                        <MenuItem as={ReactLink}>Orders</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='User'>
                        {user === null ?
                            <>
                                <MenuItem as={ReactLink} to='/user/signup'>
                                    Sign-Up
                                </MenuItem>
                                <MenuItem as={ReactLink} to='/user/login'>
                                    Login
                                </MenuItem>
                            </>
                        :
                            <>
                                <MenuItem as={ReactLink} to='/user/profile'>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    Logout
                                </MenuItem>
                            </>
                        }
                    </MenuGroup>
                </MenuList>
            </Menu>
        
        </Box>
        </Container>
        </Box>
    )
}



export default NavBar