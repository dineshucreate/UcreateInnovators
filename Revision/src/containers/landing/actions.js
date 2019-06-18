import * as type from './types'

export const inrementClicked = () => {
    return {
        type:type.INCREMENT
    }
}

export const decrementClicked = () => {
    return {
        type:type.DECREMENT
    }
}