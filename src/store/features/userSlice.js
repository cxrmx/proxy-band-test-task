import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk('users/getUsers', async (_, {rejectWithValue}) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    return res.data
  } catch (e) {
    return rejectWithValue(e.message)
  }
})

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        return {...state, loading: true, error: null}
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        return {...state, loading: false, users: action.payload}
      })
      .addCase(getUsers.rejected, (state, action) => {
        return {...state, loading: false, error: action.payload}
      })
  },
})

export default userSlice.reducer
