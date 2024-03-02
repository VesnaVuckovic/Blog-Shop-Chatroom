export const fetchProducts = () => {
    return async (dispatch) => {
      try {
        
        const response = await fetch('https://raw.githubusercontent.com/VesnaVuckovic/api-products/main/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
  
       
        dispatch({ type: 'fetchProductsSuccess', payload: data });
      } catch (error) {
        
        dispatch({ type: 'fetchProductsFailure', payload: error.message });
      }
    };
  };
  