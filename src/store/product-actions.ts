import productSlice from './product-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from './index'
import {ProductModel} from "../models/redux-models";
import ProductService from "../service/productService";

export const productActions = productSlice.actions

export const fetchProducts = (): ThunkAction<void,RootState,unknown,AnyAction> => {
    return async(dispatch,getState) => {
        if (getState().product.products.length === 0) {
            const response:ProductModel[] = await ProductService.getAllProducts();
            dispatch(productActions.setProducts(response))
        }
    }
}
