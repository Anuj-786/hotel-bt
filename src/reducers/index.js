import { combineReducers } from 'redux'

// import  {ADD_COUNT}  from '../actions'

function adds( state = 0, action ) {
    switch(action.type) {
        case 'ADD_COUNT': 
            return state+1
            
        default:
            return state
    }
}

const Rootreducers = combineReducers({
    adds
})

export default Rootreducers