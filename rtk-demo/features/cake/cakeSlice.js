const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState, //initialState: initialState same so can write just once

    reducers: {
        ordered : (state) => {
            state.numOfCakes--
        },
        restocked : (state, action) => {
            state.numOfCakes+= action.payload
        },
    },
})

module.exports = {
  cakeReducer: cakeSlice.reducer,
  cakeActions: cakeSlice.actions,
}

//we can directly mutate the state
//we can explicitly return the new state