import './App.css';
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import User from './pages/User'

function App() {
  return (
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
  );
}

export default App;
