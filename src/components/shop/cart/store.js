import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import store from "../store";


const store=configureStore({

    reducer: {
        cart:cartReducer
    }
})


export default store;