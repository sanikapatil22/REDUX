const redux = require('redux')
const createStore = redux.createStore
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOKED = 'CAKE_RESTOKED'

function orderCake(){
    return{
    type: CAKE_ORDERED,
    quantity: 1,
}
}

function restockCake(qty=1){
    return{
        t
    }
}
const initialState = {
    numOfCakes:10,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                numOfCakes : state.numOfCakes-1,
            }
            default:
                return state
    }
}

const store = createStore(reducer)
const unsubscribe = store.subscribe(() => //allow the app to subscribe to changes in the store
    console.log('update store', store.getState())
)

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()
//dispatch(action) → sends the action to reducer
