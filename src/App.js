import './App.css';
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import User from './pages/User'
import { UserContext } from './context/UserContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from './context/CartContext';
import GlobalCart from './components/GlobalCart';
import CartPage from './pages/CartPage';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const verifyUser = async () => {  
    if (localStorage.getItem('usertoken')) {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/user/verify`,{
          headers: {
            authorization:'Bearer '+ localStorage.getItem('usertoken')
          }
        });

        setUser(response.data.user);
  
      }
      catch(error) {
        if (error.response) {
          console.log(error.response.data.error);
          return;
        }
        console.log(error);
      }
    }
  }


  const loadCart = () => {
    if (localStorage.getItem('cartItems')) {
      const localItems = JSON.parse(localStorage.getItem('cartItems'));
      setCart(localItems);
    }
    else {

      localStorage.setItem('cartItems', JSON.stringify(cart));
    }
  }

  useEffect(() => {
    loadCart()
    verifyUser()
  },[])


  useEffect(() => {
    console.log(cart);
    console.log(JSON.stringify(cart));
    localStorage.setItem('cartItems', JSON.stringify(cart))

  },[ cart ])
 
  console.log(cart);

  return (
    <CartContext.Provider value={{cart,setCart}}>
    <UserContext.Provider value={{user,setUser}}>
    <div className="App">
      <NavBar />
      <GlobalCart cart={cart} setCart={setCart} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/products'>
          <Products />
        </Route>

        <Route exact path="/cart">
          <CartPage />
        </Route>

        
        <Route path='/user'>
          {user === null ? 
            <User />
            :
            <Home />
          }
      
          
        </Route>
      </Switch>
    </div>
    </UserContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
