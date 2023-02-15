import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "./features/userSlice"
import PostReducer from "./features/postSlice"
import AlbumReducer from "./features/albumSlice"

export default configureStore({
  reducer: {
    user: UserReducer,
    post: PostReducer,
    album: AlbumReducer,
  }
})

