import {createSlice} from '@reduxjs/toolkit';
import {getNotesAsync,addNotesAsync,removeNotesAsync } from './services'

const notesSlice = createSlice({
    name:'notes',
    initialState:{
        items:[],
        isLoading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:{
        [getNotesAsync.pending]:(state,action)=>{
            state.isLoading = true;
        },
        [getNotesAsync.fulfilled]:(state,action)=>{
            state.items = action.payload;
            state.isLoading = false
        },
        [getNotesAsync.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.error.message
        },

        ////////////////////////////////////////


        [addNotesAsync.fulfilled]: (state,action) =>{
            state.items.push(action.payload);
        },
        [addNotesAsync.rejected]: (state,action) =>{
            state.isLoading =false;
            state.error = action.error.message;
        },


        ////////////////////////////////////
        [removeNotesAsync.fulfilled]:(state,action) =>{
            console.log(action.payload)
            const id = action.payload
            const filtered = state.items.filter((item)=> item.id !== id);
            state.items = filtered
        },
        // [deleteNote.fulfilled]:(state,action) =>{
        //     console.log(action.payload)
        //     const id = action.payload
        //     const filtered = state.items.filter((item)=> item.id !== id);
        //     state.items = filtered
        // }

    }
});

export const selectNotes = state => state.notes.items;

export default notesSlice.reducer