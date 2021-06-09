import { Box, Container, Flex, Spacer, Image, Text, Button } from "@chakra-ui/react";



function Home() {
    return (
        <Container  maxW='container.xl' mt='40px'>
            <Flex>


         
            <Box w='60%' p='4'>
                <Image 
                alt='showcase' 
                src='https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                height='550px'
                objectFit='cover'
                borderRadius='25px'
                boxShadow='base'
                width='100%'
                />
            </Box>
            <Box w='40%' p='4'>
               <h1><Text fontSize="3xl" mb='30px'>Featured Items</Text></h1>
               <Box boxShadow='lg' w='100%' mb='30px' p={4}>
                <Flex alignItems='center'>
                <Image 
                    alt='showcase' 
                    src='https://images.unsplash.com/photo-1586527484765-979a20639316?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                    height='120px'
                    objectFit='cover'
                    boxShadow='base'
                    width='30%'
                    
                />
                <Box p='4' width='70%'>
                    <h1>
                    <text fontSize="sm">
                    Camera with Black handles and huge lens. It has flashing features and extra lighting.
                    </text></h1>
                    <Flex mt='4' justifyContent="space-between">
                        <Button colorScheme="gray" variant="outline">
                            More Info
                        </Button>
                        <Button colorScheme="gray" variant="outline">
                            Add
                        </Button>

                    </Flex>
               
        
                </Box>
               </Flex>
                </Box>
                <Box boxShadow='lg' w='100%' mb='30px' p={4}>
                <Flex alignItems='center'>
                <Image 
                    alt='showcase' 
                    src='https://images.unsplash.com/photo-1586527484765-979a20639316?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                    height='120px'
                    objectFit='cover'
                    boxShadow='base'
                    width='30%'
                    
                />
                <Box p='4' width='70%'>
                    <h1>
                    <text fontSize="sm">
                    Camera with Black handles and huge lens. It has flashing features and extra lighting.
                    </text></h1>
                    <Flex mt='4' justifyContent="space-between">
                        <Button colorScheme="gray" variant="outline">
                            More Info
                        </Button>
                        <Button colorScheme="gray" variant="outline">
                            Add
                        </Button>

                    </Flex>
               
        
                </Box>
               </Flex >
                </Box>
                <Box boxShadow='lg' w='100%' mb='30px' p={4}>
                <Flex alignItems='center'>
                <Image 
                    alt='showcase' 
                    src='https://images.unsplash.com/photo-1586527484765-979a20639316?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                    height='120px'
                    objectFit='cover'
                    boxShadow='base'
                    width='30%'
                    
                />
                <Box p='4' width='70%'>
                    <h1>
                    <text fontSize="sm">
                    Camera with Black handles and huge lens. It has flashing features and extra lighting.
                    </text></h1>
                    <Flex mt='4' justifyContent="space-between">
                        <Button colorScheme="gray" variant="outline">
                            More Info
                        </Button>
                        <Button colorScheme="gray" variant="outline">
                            Add
                        </Button>

                    </Flex>
               
        
                </Box>
               </Flex>
                </Box>
            </Box>
           </Flex>
        </Container>
    )
}

export default Home