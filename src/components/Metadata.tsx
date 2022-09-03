import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import {fetchMetadata} from '../store/metadata-actions';
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Metadata = () => {
  let {productId} = useParams();
  console.log(productId)
  const dispatch = useAppDispatch();
  const metadata = useAppSelector(state => state.metadata.metadata);

  useEffect(() => {
    dispatch(fetchMetadata(productId))
  })

  return (
    <>
      <table className="table">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Url</th>
            <th scope="col">Download</th>
        </tr>
        </thead>
        <tbody>
        {metadata.map((metadata ) => (
            <tr>
                <td>{metadata.id}</td>
                <td>{metadata.url}</td>
                <td><a href="#"><FaDownload />
              </a></td>
            </tr>
        ))}  
        </tbody>
      </table>
    </>
  );
}

export default Metadata;