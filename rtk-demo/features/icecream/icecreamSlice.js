import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice.js'  // ✅ correct path

const initialState = {
  numOfIceCreams: 20
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => { state.numOfIceCreams-- },
    restocked: (state, action) => { state.numOfIceCreams += action.payload }
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--   // decreases when a cake is ordered
    })
  }
})

export const { ordered, restocked } = icecreamSlice.actions
export const icecreamReducer = icecreamSlice.reducer