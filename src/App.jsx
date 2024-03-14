import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobePage from './pages/GlobePage';
import ShopPage from './pages/ShopPage';
import ShopHome from '../src/components/shop/src/pages/Home';



const App = () => {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/globe">
          <GlobePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/home">
          <ShopHome />
        </Route>            
      </Switch>
      
    </Router>
  );
};

export default App;
