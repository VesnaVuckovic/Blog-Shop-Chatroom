import './shopApp.css';
import { Provider } from 'react-redux';
import store from './store';
import ShopHome from './shopHome';
import ShopHeader from './shop-components/shopHeader';
import Cart from './shop-components/Cart';


const shopApp = () => {
  return (

    <>
      <Provider store={store}>

        <ShopHeader/>
        <ShopHome/>
        <Cart/>

      </Provider>

    </>


  );
}


export default shopApp;