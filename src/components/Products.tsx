import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import {fetchProducts} from '../store/product-actions';
import React, { useEffect } from 'react';
import { FaEye } from "react-icons/fa";


const Products = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.product.products);

    useEffect(() => {
        dispatch(fetchProducts())
      });
   
    return(
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Image</th>
                    <th scope="col">Label</th>
                    <th scope="col">Status</th>
                    <th scope="col">Complete</th>
                    <th scope="col">Metadata</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr>
                        <td>{product.id}</td>
                        <td><img src={product.image} width="20px" height="20px"></img></td>
                        <td>{product.label}</td>
                        <td>{product.status}</td>
                        <td>{product.complete}</td>
                        <td><a href={"/metadata/" + product.id}><FaEye /></a></td>
                    </tr>
                ))}  
                </tbody>
            </table>
        </>
    );
}
export default Products;