import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopReducer";

const store=configureStore({

    reducer:shopReducer
})

export default store;