import {ProductModel,ProductArrayModel} from "../models/redux-models";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialProductState:ProductArrayModel = {
    products:[],
}

const productSlice = createSlice({
    name: 'product',
    initialState:initialProductState,
    reducers: {
        setProducts(state, action: PayloadAction<ProductModel[]>) {
            state.products=action.payload;
        }
    }
})
export default productSlice;