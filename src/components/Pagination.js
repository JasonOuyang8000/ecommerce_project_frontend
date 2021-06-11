import { useEffect, useState } from 'react'

import {
    Box,
    Container,
    HStack,
    Button,
    Link
} from '@chakra-ui/react'
import {
    ArrowLeftIcon,
    ArrowRightIcon
} from '@chakra-ui/icons'

import ItemCard from '../components/ItemCard'

function Pagination({data, dataLimit, pageLimit}) {
    const [pages] = useState(Math.round(data.length / dataLimit))
    const [currentPage, setCurrentPage] = useState(1)
    const [pageData, setPageData] = useState([])

    const nextPage = () => {
        setCurrentPage(currentPage => currentPage + 1)
    }
    const prevPage = () => {
        setCurrentPage(currentPage => currentPage - 1)
    }
    const setPage = (e) => {
        const pageNum = Number(e.target.textContent)
        setCurrentPage(pageNum)
    }
    const getPageData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        setPageData(data.slice(startIndex, endIndex))
    }
    const getPageGroup = () => {
        let start = Math.floor((currentPage / pageLimit) * pageLimit)
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
    }

    useEffect(getPageData, [])
    useEffect(getPageData, [currentPage, dataLimit])
    
    return (
        <>
            {/* show limited items */}
            <Box display='flex' flexWrap='wrap' justifyContent='space-between' mb='5'>
                {pageData.map(item => (
                    <ItemCard key={item.uuid} item={item} />
                ))}
            </Box>
            <Box>
                <HStack spacing={4}>
                    <Button onClick={prevPage}
                        {...currentPage === 1 ? 'isDisabled' : 'isActive'}
                    >
                        <ArrowLeftIcon />
                    </Button>

                    {getPageGroup().map((num, i) => (
                        <Link
                            key={i}
                            onClick={setPage}
                        >
                            {num}
                        </Link>
                    ))}

                    <Button onClick={nextPage}
                        {...currentPage === pages ? 'isDisabled' : 'isActive'}
                    >
                        <ArrowRightIcon />
                    </Button>
                </HStack>
            </Box>
        </>
    )
}

export default Pagination