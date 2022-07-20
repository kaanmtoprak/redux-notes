import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getNotesAsync = createAsyncThunk('notes/getNotesAsync', async ()=>{
    const res = await axios('http://localhost:3001/notes');
    return res.data;
});
export const addNotesAsync = createAsyncThunk('notes/addNotesAsync', async (data)=>{
    const res = await axios.post('http://localhost:3001/notes',data);
    return res.data;
});
export const removeNotesAsync = createAsyncThunk('notes/removeNotesAsync', async(id)=>{
    await axios.delete(`http://localhost:3001/notes/${id}`);
    return id
    });
// export const deleteNote = createAsyncThunk('delete/deleteNote', async(data)=>{
//     const res = await axios.post('http://localhost:3001/delete',data);
//     return res.data
//     });
