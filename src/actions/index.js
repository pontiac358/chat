import {
    FETCH_MESSAGES_START,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE,

    ADD_MESSAGE_START,
    ADD_MESSAGE_SUCCESS,
    ADD_MESSAGE_FAILURE,

    DELETE_MESSAGE_START,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_FAILURE,

    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from '../actionTypes'

import {
    fetchMessages  as fetchMessagesApi,
    fetchUser     as fetchUserApi,
    addMessage    as addMessageApi,
    deleteMessage as deleteMessageApi,
} from '../api'

export const fetchMessages = () => async dispatch => {
    dispatch({type: FETCH_MESSAGES_START})

    try {
        const message = await fetchMessagesApi()
        dispatch({
            type: FETCH_MESSAGES_SUCCESS,
            payload: message
        })
    } catch (err) {
        dispatch({
            type: FETCH_MESSAGES_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const addMessage = message => async dispatch => {
    dispatch({type: ADD_MESSAGE_START, payload: message})

    try {
        let id =  await addMessageApi(message)
        dispatch({
            type: ADD_MESSAGE_SUCCESS,
            payload: id
        })
    } catch (id) {
        dispatch({
            type: ADD_MESSAGE_FAILURE,
            payload: id,
            error: true
        })
    }
}

export const deleteMessage = messId => async dispatch => {
    dispatch({type: DELETE_MESSAGE_START, payload: messId})

    try {
        let id =  await deleteMessageApi(messId)
        dispatch({
            type: DELETE_MESSAGE_SUCCESS,
            payload: id
        })
    } catch (id) {
        dispatch({
            type: DELETE_MESSAGE_FAILURE,
            payload: id,
            error: true
        })
    }
}


export const restoreMessage = message => async dispatch => {
    (async() =>{
        await deleteMessage(message.id)(dispatch)
        await addMessage(message)(dispatch)
    })()
}


export const fetchUser = () => async dispatch => {
    dispatch({type: FETCH_USER_START})

    try {
        const user = await fetchUserApi()
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: user
        })
    } catch (err) {
        dispatch({
            type: FETCH_USER_FAILURE,
            payload: err,
            error: true
        })
    }
}