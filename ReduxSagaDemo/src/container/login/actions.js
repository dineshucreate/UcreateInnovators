import {ADD_CLICKED, DELETE_CLICKED , ON_TEXT_CHANGE} from './types'
export const addClicked = (text) => {
    return {
        type:ADD_CLICKED,
        textToAdd:text
    }
}

export const deleteClicked = (index) => {
    return {
        type:DELETE_CLICKED,
        index:index
    }
}

export const textChanged = (text) => {
    return {
        type:ON_TEXT_CHANGE,
        text
    }
}