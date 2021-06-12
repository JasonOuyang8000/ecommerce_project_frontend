import { Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Cart({cart, setCart}) {
    
    const getCartQuantity = () => {
        let total = 0;
       for (let i = 0; i < cart.length; i++) {
          total += Object.values(cart[i])[0];
       }

       return total;
    }

    return (
        <Box>
           <Button borderRadius="30px" py="3" px="8" bg="white" shadow="lg" position="fixed" bottom="5%" right="5%" color="black" >
               <FontAwesomeIcon icon={faShoppingCart} size="lg" /> 
               <Box position="relative" top="0" right="-10px">
                    {cart.length > 0 && getCartQuantity()}
               </Box>
            </Button> 
        </Box>
    );

}