import {
    Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button
} from "@chakra-ui/react"
import axios from "axios"

import { useContext, useState } from 'react'
import { UserContext } from "../../context/UserContext"

function Signup() {
    const [inputs, setInputs] = useState({username:'',email:'',password:''})
    
    const {user,setUser} = useContext(UserContext);
 

    const handleInputs = (e) => {
        let name = e.target.name
        let value = e.target.value
        setInputs({...inputs, [name]: value})
        
        
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
       
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/user`,inputs);
            setUser(response.data.user);
            localStorage.setItem('usertoken', response.data.userToken);

        }
        catch(error) {
           if (error.response) {
               console.log(error.response.data.error);
               return;
           }
           console.log(error);
        }
    }

    return (
        <form className='userForm signupForm' onSubmit={handleSubmit}>
            <Heading size='lg' m='3'>Sign Up</Heading>

            <FormControl id="username" isRequired>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <Input name='username' value={inputs.username} type="text" onChange={handleInputs} />
            </FormControl>

            <FormControl id="email" isRequired>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input name='email' value={inputs.email} type="email" onChange={handleInputs} />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input name='password' value={inputs.password} type="password" onChange={handleInputs} />
            </FormControl>

            <Button type="submit" bg='tomato' size='md' m='3'>Submit</Button>
        </form>
    )
}

export default Signup