import './App.css';
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import User from './pages/User'
import { UserContext } from './context/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  
  


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
          <User />
        </Route>
      </Switch>
    </div>
    </UserContext.Provider>
  );
}

export default App;
