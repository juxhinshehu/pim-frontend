import {MetadataModel,MetadataArrayModel} from "../models/redux-models";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialMetadataState: MetadataArrayModel = {
    metadata: [],
}

const metadataSlice = createSlice({
    name: 'metadata',
    initialState: initialMetadataState,
    reducers: {
        setMetadata(state, action: PayloadAction<MetadataModel[]>) {
            state.metadata = action.payload;
        }
    }
})

export default metadataSlice;