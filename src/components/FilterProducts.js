import { useState, useRef } from 'react'

import { // Drawer needs fixing!
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
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

function FilterProducts({dataLimit, setDataLimit}) {
    const { isOpen, onOpen, onClose }
    const btnRef = useRef()

    const [maxPrice, setMaxPrice] = useState(null)
    const [minPrice, setMinPrice] = useState(0)

    return (
        <Box as='aside'>
            <Button ref={btnRef} onClick={onOpen}>Filter</Button>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
            >

            </Drawer>

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
                    <SliderThumb />
                </Slider>
            </FormControl>

            {/* control min price */}
            <FormControl>
                <FormLabel htmlFor='dataLimit'>Min: ${minPrice}</FormLabel>
                <Slider
                    name='dataLimit'
                    aria-label="slider-dataLimit"
                    defaultValue={minPrice}
                    max={500}
                    min={10}
                    step={5}
                    onChangeEnd={val => setMinPrice(val)}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </FormControl>

            {/* control max price */}
            <FormControl>
                <FormLabel htmlFor='dataLimit'>Max: ${maxPrice}</FormLabel>
                <Slider
                    name='dataLimit'
                    aria-label="slider-dataLimit"
                    defaultValue={maxPrice}
                    max={1000}
                    min={10}
                    step={10}
                    onChangeEnd={val => setMaxPrice(val)}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </FormControl>
        </Box>
    )
}

export default FilterProducts