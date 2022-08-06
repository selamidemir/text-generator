import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fecthText = createAsyncThunk('paragraph/getAsyncText', async({number, type}) => {
    const res = await axios(`${process.env.REACT_APP_API_END_POINT}/?type=all-meat&paras=${number}&format=${type}`);
    return res.data;
});


export const formSlice = createSlice({
    name: 'form',
    initialState: {
        items: [],
        number: 4,
        type: 'text',
        isLoading: false,
        error: null,
    },
    reducers: {
        setNumber: (state, action) => {
            state.number = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        }
    },
    extraReducers: {
        [fecthText.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fecthText.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fecthText.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
    }
});

export const {setType, setNumber} = formSlice.actions;
export default formSlice.reducer;