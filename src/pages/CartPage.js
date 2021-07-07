import { Container } from "@chakra-ui/react";
import { useState } from "react";



const CartPage = () => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')));

    


    return (
        <Container  maxW='container.xl' py='5'>
            

        </Container>
    )
}

export default CartPage