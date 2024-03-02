import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    isOpen: false,
    searchQuery: "",
    loading: false,
    error: null,
}

const shopSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addItem: (state, action) => {
            const id = action.payload.id;
            const existingItem = state.cartItems.find(item => item.id === id);        
           
            if (existingItem && (existingItem.id.toLowerCase().includes(state.searchQuery.toLowerCase()) || state.searchQuery === '')) {
                existingItem.quantity++;
            } else {
                
                state.cartItems.push(action.payload);
            }
        },
        toggleCartOpen(state, action) {

            state.isOpen = action.payload;
        },
        increment(state, action) {
            const id = action.payload;

            state.cartItems = state.cartItems.map(elem => {

                if (elem.id === id) {

                    elem.quantity++;
                }

                return elem;

            })


        },
        decrement(state, action) {
            const id = action.payload;

            state.cartItems = state.cartItems.map(elem => {

                if (elem.id === id && elem.quantity>1) {

                    elem.quantity--;
                }

                return elem;

            })


        },
        deleteItem(state,action){
            const id = action.payload;

           const index=state.cartItems.findIndex(elem=>parseInt(elem.id)===parseInt(id));
               
           state.cartItems.splice(index,1);

        },
        deleteAll(state){

            state.cartItems=[];
        },

        
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },

        fetchProductsSuccess(state, action) {
            state.products = action.payload;
            state.loading = false;
            state.error = null;
          },
          fetchProductsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
        }
      });

export const { addItem, toggleCartOpen ,increment,decrement,deleteItem,deleteAll,setSearchQuery, fetchProductsSuccess, fetchProductsFailure} = shopReducer.actions;

export default shopSlice.reducer;