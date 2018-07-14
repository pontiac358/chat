import * as R from 'ramda'
import { setStatusMessage, deleteMessage }  from '../selectors'
import {
    FETCH_MESSAGES_SUCCESS,
    ADD_MESSAGE_START,
    ADD_MESSAGE_SUCCESS,
    ADD_MESSAGE_FAILURE,
    DELETE_MESSAGE_SUCCESS

} from '../actionTypes'

const InitialState = [];

export default (state = InitialState, {type, payload}) => {
    switch (type) {
        case FETCH_MESSAGES_SUCCESS:
            return [...payload]
        case ADD_MESSAGE_START:
            let messageAdd = {...payload}
            messageAdd.status = 'sending'

            return [...state, messageAdd]
        case ADD_MESSAGE_SUCCESS:
            const id = payload
            let messages = setStatusMessage('succsess', id, state)

            return [...messages]
        case ADD_MESSAGE_FAILURE:
            const errId = payload
            let messagesErr = setStatusMessage('failure', errId, state)

            return [...messagesErr]
        case DELETE_MESSAGE_SUCCESS:
            const deleteId = payload
            let messagesDelete = deleteMessage(deleteId, state)

            return [...messagesDelete]
        default:
            return state
    }
}