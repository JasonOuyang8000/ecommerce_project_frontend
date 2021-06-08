import {
    Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button
} from "@chakra-ui/react"

import { useState } from 'react'

function Login() {
    const [inputs, setInputs] = useState({})

    const handleInputs = (e) => {
        let name = e.target.name
        let value = e.target.value
        setInputs({...inputs, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className='userForm loginForm' onSubmit={handleSubmit}>
            <Heading size='lg' m='3'>Login</Heading>

            <FormControl id="email" isRequired>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input name='email' value={inputs.email} type="email" onChange={handleInputs} />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input name='password' value={inputs.password} type="password" onChange={handleInputs} />
            </FormControl>

            <Button bg='tomato' size='md' m='3'>Submit</Button>
        </form>
    )
}

export default Login