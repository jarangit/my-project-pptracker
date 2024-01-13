import { configureStore } from '@reduxjs/toolkit'
import  webStateReducer  from './feature/web-state-slice'

export const store = configureStore({
  reducer: {
   webState: webStateReducer,
  }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch