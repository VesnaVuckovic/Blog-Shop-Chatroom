import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobePage from './pages/GlobePage';
import ShopPage from './pages/ShopPage';
import HomeShop from './components/shop/src/index';
import SignIn from './components/registration/src/client/SignIn';
import SignUp from './components/registration/src/client/SignUp';
import Welcome from './components/registration/src/client/Welcome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/globe" element={<GlobePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/HomeShop" element={<HomeShop />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default App;
