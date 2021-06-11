import axios from 'axios'
import { useEffect, useState } from 'react'

import { Container, Heading, Text } from '@chakra-ui/react'
import Pagination from '../components/Pagination'
import FilterProducts from '../components/FilterProducts'

// filter options (items/page)
function Products() {
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])

    const [filters, setFilters] = useState({
        dataLimit: 24,
        minPrice: 0,
        maxPrice: Infinity
    })

    const [error, setError] = useState('')

    const filterItems = () => { // write a test for this func
        const filtered = items.filter(i => {
            if (parseFloat(i.price) > filters.minPrice && parseFloat(i.price) < filters.maxPrice) {
                console.log(true);
                return i
            }
        })
        setFilteredItems(filtered)
    }
    useEffect(filterItems, [])
    useEffect(filterItems, [filters])

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
        <Container  maxW='container.xl' py='5'>
            <FilterProducts
                filters={filters}
                setFilters={setFilters}
            />

            {items.length > 0 &&
                <Pagination
                    data={filteredItems}
                    filters={filters}
                    pageLimit={10}
                />
            }
        </Container>
    )
}

export default Products