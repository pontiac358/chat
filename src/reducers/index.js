import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import messages from './messages'
import user from './user'
import activeChatUser from './activeChatUser'

export default combineReducers({
    messages,
    user,
    activeChatUser,
    routing: routerReducer
})