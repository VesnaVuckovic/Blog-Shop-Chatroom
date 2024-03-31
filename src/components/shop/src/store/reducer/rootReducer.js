import { combineReducers } from 'redux';
// import popupReducer from './popupReducer';
import cartSlice from './cartSlice';


const rootReducer = combineReducers({
  // popup: popupReducer,
  cart: cartSlice    
});

export default rootReducer;
