import { GET_GIFS, GET_GIFS_SUCCESS, GET_GIFS_FAIL } from './types'

export const getGifs = () => ({
    type: GET_GIFS
});

export const getGifsSuccess = (gifsData) => ({
    type: GET_GIFS_SUCCESS,
    gifsData
})

export const getGifsFail = () => ({
    type: GET_GIFS_FAIL
})