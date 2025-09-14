import { fetchUsers } from './features/user/userSlice.js'
import store from './app/store.js'
import { ordered as cakeOrdered, restocked as cakeRestocked } from './features/cake/cakeSlice.js'
import { ordered as icecreamOrdered, restocked as icecreamRestocked } from './features/icecream/icecreamSlice.js'

console.log('initial state', store.getState())

store.subscribe(() => {
  console.log('updated state', store.getState())
})

store.dispatch(fetchUsers())

// store.dispatch(cakeOrdered())
// store.dispatch(cakeOrdered())
// store.dispatch(cakeOrdered())
// store.dispatch(cakeRestocked(3))

// store.dispatch(icecreamOrdered())
// store.dispatch(icecreamOrdered())
// store.dispatch(icecreamOrdered())
// store.dispatch(icecreamRestocked(5))