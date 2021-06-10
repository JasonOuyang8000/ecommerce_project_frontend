import axios from 'axios'
import { useEffect, useState } from 'react'

import { Container, Heading, Text } from '@chakra-ui/react'
import Pagination from '../components/Pagination'
import FilterProducts from '../components/FilterProducts'

// filter options (items/page)
function Products() {
    const [items, setItems] = useState([])
    const [dataLimit, setDataLimit] = useState(24)
    const [error, setError] = useState('')

    // fetch all items
    const fetchItems = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND}/item`)

            if (res.status === 200) {
                console.log(res.data);
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
        <Container py='5'>
            <FilterProducts
                dataLimit={dataLimit}
                setDataLimit={setDataLimit}
            />

            {items.length > 0 &&
                <Pagination
                    data={items}
                    dataLimit={dataLimit}
                    pageLimit={10}
                />
            }
        </Container>
    )
}

export default Products