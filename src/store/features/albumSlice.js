import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAlbums = createAsyncThunk('album/getAlbum', async (userId) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  ).then((res) => res.json())
})

const albumSlice = createSlice({
  name: 'posts',
  initialState: {
    albums: [],
    loading: false,
    error: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAlbums.pending, (state, action) => {
        return { ...state, loading: true }
      })
      .addCase(getAlbums.fulfilled, (state, action) => {
        return { ...state, loading: false, albums: action.payload }
      })
      .addCase(getAlbums.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload }
      })
  },
})

export default albumSlice.reducer
