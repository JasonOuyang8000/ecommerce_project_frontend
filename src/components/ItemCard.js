import { Box, Text } from '@chakra-ui/react'

function ItemCard({item}) {
    return (
        <Box m={3}>
            <Text>{item.id}</Text>
        </Box>
    )
}

export default ItemCard