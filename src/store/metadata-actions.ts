import metadataSlice from './metadata-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from './index'
import {MetadataModel} from "../models/redux-models";
import metadataService from "../service/metatadaService";

export const metadataActions = metadataSlice.actions;

export const fetchMetadata = (productId: any): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch,getState) => {
        if (getState().metadata.metadata.length === 0) {
            const response: MetadataModel[] = await metadataService.getMetadata(productId);
            dispatch(metadataActions.setMetadata(response))
        }
    }
}