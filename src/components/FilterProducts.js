import { useState, useRef } from 'react'

import { // Drawer needs fixing!
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/react"
import {
    Container,
    Box,
    Text,
    Button,
    FormControl,
    FormLabel,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react"

function FilterProducts({
    filters, setFilters
}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const [dataLimit, setDataLimit] = useState(24)
    const [maxPrice, setMaxPrice] = useState(Infinity)
    const [minPrice, setMinPrice] = useState(0)

    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, "")

    const handleResetFilters = () => {
        // reset filter values
        setDataLimit(24)
        setMaxPrice(Infinity)
        setMinPrice(0)
        handleFilter()
    }

    const handleFilter = async () => {
        await setFilters({
            dataLimit: dataLimit,
            minPrice: minPrice,
            maxPrice: maxPrice
        })
    }

    return (
        <Box as='aside'>
            <Button ref={btnRef} onClick={onOpen} mb='4'>Filter</Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Filter Search Results</DrawerHeader>

                    <DrawerBody>
                        {/* control items per page */}
                        <FormControl>
                            <FormLabel htmlFor='dataLimit'>Items: {dataLimit} per page</FormLabel>
                            <Slider
                                name='dataLimit'
                                aria-label="slider-dataLimit"
                                defaultValue={dataLimit}
                                max={48}
                                min={8}
                                step={4}
                                onChangeEnd={val => setDataLimit(val)}
                            >
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb fontSize="sm" boxSize="24px" children={dataLimit} />
                            </Slider>
                        </FormControl>

                        {/* control min price */}
                        <FormControl>
                            <FormLabel htmlFor='minPrice'>
                                Min:
                                <NumberInput name='minPrice' maxW="100px" mr="2rem" value={format(minPrice)} onChange={val => setMinPrice(parse(val))}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormLabel>
                            <Slider
                                name='minPrice'
                                aria-label="slider-minPrice"
                                defaultValue={minPrice}
                                max={500}
                                min={10}
                                step={5}
                                onChangeEnd={val => setMinPrice(val)}
                            >
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb fontSize="sm" boxSize="24px" children={minPrice} />
                            </Slider>
                        </FormControl>

                        {/* control max price */}
                        <FormControl>
                            <FormLabel htmlFor='maxPrice'>
                                Max:
                                <NumberInput name='maxPrice' maxW="100px" mr="2rem" value={format(maxPrice)} onChange={val => setMaxPrice(parse(val))}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormLabel>
                            <Slider
                                name='maxPrice'
                                aria-label="slider-maxPrice"
                                defaultValue={maxPrice}
                                max={1000}
                                min={10}
                                step={10}
                                onChangeEnd={val => setMaxPrice(val)}
                            >
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb fontSize="sm" boxSize="24px" children={maxPrice} />
                            </Slider>
                        </FormControl>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={handleResetFilters}>
                            Reset
                        </Button>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={()=>{
                            handleFilter()
                            onClose()
                        }}>
                            Save
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </Box>
    )
}

export default FilterProducts