import { createSlice } from '@reduxjs/toolkit'

const initialState = { numOfCakes: 10 }

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: state => { state.numOfCakes-- },
    restocked: (state, action) => { state.numOfCakes += action.payload }
  }
})

export const { ordered, restocked } = cakeSlice.actions
export const cakeReducer = cakeSlice.reducer

// //we can directly mutate the state
// //we can explicitly return the new state