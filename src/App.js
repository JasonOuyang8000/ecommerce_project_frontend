import './App.css';
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import User from './pages/User'
import { UserContext } from './context/UserContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    verifyUser();
  },[])

  


  return (
    <UserContext.Provider value={{user,setUser}}>
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/products'>
          <Products />
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
  );
}

export default App;
