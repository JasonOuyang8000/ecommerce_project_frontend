import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";

export default function ItemCardHome ({images, name}) {
   
    return (
        <Box  background='white'   boxShadow='lg' fontSize="12px" w='100%' mb='30px' p={4}>
            <Flex alignItems='center'>
            <Image 
                alt='showcase' 
                src={images[0].image}
                height='70px'
                objectFit='cover'
                boxShadow='base'
                width='100px'
                
            />
    
            <Box p='4' width='70%'>
                <h1>
                <Text noOfLines="3" fontSize="sm">
                {name}
                </Text></h1>
            
        
    
            </Box>
            <Flex mt='4'   direction="column" justifyContent="center">
                    <Button fontSize="12px"  mb="4" colorScheme="gray" variant="outline">
                        More Info
                    </Button>
        
                </Flex>
            </Flex >
        </Box>

    );
}

