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

function ItemCard({item}) {
    
    const cleanName = (str) => { // write test for this
        let cleaned = str.slice(0)
        // clean up db.name to be displayed nicely
        cleaned = cleaned.replaceAll("&#39;", "'")
        cleaned = cleaned.replaceAll("&quot;", '"')
        console.log(cleaned);
        return cleaned
    }

    return (
        <LinkBox bg='white' w='24%' mb='3' p='2' border='1px' borderColor='blackAlpha.300' borderRadius='md' pos='relative' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
            <Heading  size='sm' noOfLines={2}>
                <LinkOverlay as={ReactLink} to={`/product/${item.id}`}>
                    {cleanName(item.name)}
                </LinkOverlay>
            </Heading>
            <Text alignSelf='flex-start' mt='2'>${item.price}</Text>
            <Image src={item.images[0].image} alt='Product show' h='18vw' w='auto' objectFit='cover' my='2' borderRadius='md' boxShadow='md' />
        </LinkBox>
    )
}

export default ItemCard