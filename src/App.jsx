import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobePage from './pages/GlobePage';
import ShopPage from './pages/ShopPage';
import HomeShop from './components/shop/src/index';



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
        <Route path="/HomeShop">
          <HomeShop />
        </Route>               
      </Switch>
      
    </Router>
  );
};

export default App;
