import { Container } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";



const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    const getCartItems = async() => {
        try {
            const items = JSON.parse(localStorage.getItem('cartItems'));

          

            const response = await axios.get(`${process.env.REACT_APP_BACKEND}/cart/items`, {
                params: {
                   items
                }
            });


            console.log(response);
            

        }
        catch(error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getCartItems();
    }, [])



    return (
        <Container  maxW='container.xl' py='5'>
            

        </Container>
    )
}

export default CartPage