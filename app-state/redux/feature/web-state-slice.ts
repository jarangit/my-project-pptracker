import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  images:['']
}

export const webState = createSlice({
  name:'webState',
  initialState,
  reducers:{
    addImageUrl:(state, action: PayloadAction<string>) =>{
      if(action){
        state.images.push(action.payload)
      }
    }
  }
})

export const {addImageUrl} = webState.actions

export default webState.reducer