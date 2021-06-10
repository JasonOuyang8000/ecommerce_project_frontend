import { Box, Container, Flex, Spacer, Image, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemCardHome from "../components/ItemCardHome";



function Home() {

    const [randomItems, setRandomItems] = useState([]);  

    const getRandomItems = async () => {
       try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/item/rand`);
        
        setRandomItems(response.data.items);

       }
       catch(error) {
           console.log(error);
       }
    
    }


    useEffect(() => {
        getRandomItems();
    },[]);


    return (
        <Container   maxW='container.xl' mt='40px'>
            <Flex>


         
            <Box  w='60%' p='4'>
                <Box 
                position='relative'
                height='100%'
                boxShadow='lg'
                >
                    <Image 
                    alt='showcase' 
                    src='https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1084&q=80'
                    height='100%'
                    objectFit='cover'

                    width='100%'
           

                    />
                    <div style={{
                    
                    backgroundImage: 'linear-gradient(-179deg, rgba(233, 130, 40, 0) 5%, rgba(233, 130, 40, 0.4) 65%)',
                    position:'absolute',
                    width:'100%',
                    height: '100%',
                    top: 0,
                    border: "10px solid white"
                    }}
                    
                    >
                   

                    </div>
                    <div
                        style={{
                    
                            position:'absolute',
                            width:'100%',
                            height: '100%',
                            bottom: 0,
                            display: 'flex',
                            alignItems:'flex-end',
                            justifyContent:'center',
                    
                        }}
                    >
                        
                        <h1>
                            <Text mb="4" fontWeight='600' color="white" fontSize="65px" >Products</Text>
                            <Text mb="20" textAlign='center' fontWeight='600' color="white" fontSize="24px" >Shop Till You Drop</Text>
                        </h1>
               

                    </div>
            
                 
                </Box>
            
             
            </Box>
            <Box w='40%' p='4'>
                <h1><Text mb='5' textAlign="center" fontSize="20px" fontWeight="bold">Some Products</Text></h1>
                
                {
                    randomItems.map(item =><ItemCardHome key={item.id} {...item}/>)
            
                
            
                }


               
           

                
            </Box>
           </Flex>
        </Container>
    )
}

export default Home