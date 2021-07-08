import { Container, VStack, Box, Image, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";



const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    const getCartItems = async() => {
        try {
            const items = JSON.parse(localStorage.getItem('cartItems'));

          

            const response = await axios.get(`${process.env.REACT_APP_BACKEND}/cart/items`, {
                params: {
                   items
                }
            });


            setCartItems(response.data.items);
         
            console.log(cartItems);

        }
        catch(error) {
            console.log(error);
        }
    }
    
  

    useEffect(() => {
        getCartItems();
    }, [])

    
    return (
    
        <Container  maxW='container.xl' py='5'>
            <VStack
             spacing={4}
             align="stretch"
            >
            {cartItems.map(item => (
    
                    <Box
                    key={item.id} 
                    minH="150px" 
                    p="4" 
                    bg="white" 
                    shadow="md">

                    <Flex>
                        <Box>
                            <Image 
                            src={item.images[0].image} 
                            boxSize="150px"
                            objectFit="cover"
                            alt={item.name} 
                            />
                        </Box>
                        <Box 
                        ml="4"
                        w="25%"
                        >
                            <Text 
                            noOfLines="4"
                            fontWeight="bold"
                            >
                                {item.name}

                            </Text>

                        </Box>
                  

                    </Flex>
                    </Box>
       
            ))}
         
         
            </VStack>

        </Container>
    )
}

export default CartPage