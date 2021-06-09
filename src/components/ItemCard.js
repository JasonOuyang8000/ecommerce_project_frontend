import { Box, Text } from '@chakra-ui/react'

function ItemCard({item}) {
    
    const cleanName = (str) => {
        // clean up db.name to be displayed nicely
    }

    return (
        <Box m={3}>
            <Text>{item.name}</Text>
        </Box>
    )
}

export default ItemCard