import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk('posts/getPosts', async (userId) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((res) => res.json())
})

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: ''
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        return {...state, loading: true}
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        return {...state, loading: false, posts: action.payload}
      })
      .addCase(getPosts.rejected, (state, action) => {
        return {...state, loading: false, error: action.payload}
      })
  },
})

export default postSlice.reducer
