import axios from 'axios'
import { useEffect, useState } from 'react'

import { Box, Heading, Text } from '@chakra-ui/react'
import Pagination from '../components/Pagination'

// filter options (items/page)
function Products() {
    const [items, setItems] = useState([])
    const [error, setError] = useState('')

    // fetch all items
    const fetchItems = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND}/item`)

            if (res.status === 200) {
                console.log(res.data.message);
                setItems(res.data.items)
            } else {
                console.log('error in fetchItems');
                console.log(res);
            }
        } catch (error) {
            console.error(error);
            setError(error.message)
        }
    }
    useEffect(fetchItems, [])

    return (
        <Box>
            <Heading fontSize='3xl'>Products Page</Heading>
            {items.length > 0 &&
                <Pagination
                    data={items}
                    dataLimit={20}
                    pageLimit={10}
                />
            }
        </Box>
    )
}

export default Products