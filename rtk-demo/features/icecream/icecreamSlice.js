const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numOfIceCreams: 20,
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--;
        },
        restocked: (state, action) => {
            state.numOfIceCreams+= action.payload
        },
    },
})

module.exports = {
  icecreamReducer: icecreamSlice.reducer,   
  icecreamActions: icecreamSlice.actions,  
}
