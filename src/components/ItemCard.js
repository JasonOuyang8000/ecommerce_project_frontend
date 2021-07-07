import { Link as ReactLink } from 'react-router-dom'
import {
    Box,
    Text,
    Heading,
    Image,
    Button,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ItemCard({item}) {
    
    const {cart, setCart} = useContext(CartContext)



    const cleanName = (str) => { // write test for this
        let cleaned = str.slice(0)
        // clean up db.name to be displayed nicely
        cleaned = cleaned.replaceAll("&#39;", "'")
        cleaned = cleaned.replaceAll("&quot;", '"')

        return cleaned
    }

    const addToCart = (e,id) => {
        const cartCopy = [...cart];
        const cartItemIndex = cart.findIndex(item => id in item);
        if (cartItemIndex >= 0) {
            cartCopy[cartItemIndex][id] +=  1;
        }
        else {
        

            cartCopy.push({[id]: 1});
        }

        setCart(cartCopy);

    };


    return (
        <Box boxShadow='md' bg='white' w='24%' mb='3' p='2' border='1px' borderColor='blackAlpha.300' borderRadius='md' pos='relative' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
                <Heading mb="2"  size='sm' noOfLines={2}>
                    <LinkOverlay as={ReactLink} to={`/product/${item.id}`}>
                        {cleanName(item.name)}
                    </LinkOverlay>
                </Heading>
            <Box display="flex">
            <Text alignSelf='flex-start' mt='2' mr="3">${item.price}</Text>
            <Button onClick={(e) => addToCart(e,item.id)}  borderRadius="50%">
                +
            </Button>
            </Box>
            <Image src={item.images[0].image} alt='Product show' h='18vw' w='auto' objectFit='cover' my='2' borderRadius='md' />
        </Box>
    )
}

export default ItemCard