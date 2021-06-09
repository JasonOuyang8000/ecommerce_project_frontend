import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import Signup from '../components/forms/Signup'
import Login from '../components/forms/Login'

function User() {
    const { path } = useRouteMatch()
    
    return (
        <Switch>
            <Route path={`${path}/signup`}>
                <Box h='75vh' display='flex' alignItems='center' justifyContent='center'>
                    <Signup />
                </Box>
            </Route>
            <Route path={`${path}/login`}>
                <Box h='75vh' display='flex' alignItems='center' justifyContent='center'>
                    <Login />
                </Box>
            </Route>
            <Route path={`${path}/profile`}>
                <Box>
                    Profile Page!
                </Box>
            </Route>
        </Switch>
    )
}

export default User