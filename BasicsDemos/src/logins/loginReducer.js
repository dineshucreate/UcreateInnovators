import {Increment, Decrement, NavigateToHome} from './types'
const INITIAL_STATE = {
    counter : 0
}

export default LoginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Increment:
        return {counter:state.counter + 1}
        case Decrement:
        return {counter:state.counter - 1}
        case NavigateToHome:
        return {counter:state.counter - 1}
        default:
        return state
    }
}