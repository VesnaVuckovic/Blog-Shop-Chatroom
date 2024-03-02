import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { connect } from 'react-redux';
import { fetchProducts } from './shopAction';
import ProductSlider from './ProductSlider';

const Shop = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <h2>Shop</h2>
      <div className="product-slider">
        <ProductSlider products={products} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.shop.products,
});

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
  document.getElementById('root')
);

export default connect(mapStateToProps, null, { fetchProducts })(Shop);
