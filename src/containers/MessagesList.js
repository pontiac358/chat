import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import Message from '../components/Message'

import { fetchMessages, fetchUser, deleteMessage, restoreMessage } from '../actions'
import { sortMessages } from '../selectors'

class MessagesList extends Component {

	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.props.fetchMessages()
		this.props.fetchUser()
	}


	render(){
		const { messages, user, setRef, deleteMessage, restoreMessage } = this.props

		return (

        <div className="messages-list" ref={ setRef } id='messageList'>

            { messages.map((message, i) =>{
                let indexNext = i + 1
                let nextMessUser =  messages[indexNext] && messages[indexNext].user

                let indexPrev = i - 1
                let prevMessUser =  messages[indexPrev] && messages[indexPrev].user

                let today = Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0);
                let renderTodayBlock = '';
                let todayBlock = (message.date > today) && (messages[indexPrev].date < today);

                renderTodayBlock =  todayBlock && (
                	<div className='message'>
                        <div className="message__wrap message__wrap_today">
                            Сегодня
                        </div>
					</div>
                )

                return(
                	<div  key={message.id}>
						{ renderTodayBlock }
                        <Message
                            {...message}
                            nextMessUser={nextMessUser}
                            prevMessUser={prevMessUser}
                            myMessage={message.user && user.id == message.user.id}
							onDelete={deleteMessage}
							onRestore={() => restoreMessage(message)}
                        />
					</div>

                )
            })
            }

        </div>
        )

	}

}

const mapStateToProps = (state, ownProps) => {
    return{
        messages: sortMessages('date', state.messages),
		user: state.user,
		activeChatUser: state.activeChatUser,
        ownProps
    }
}

const mapDispatchToProps = {
    fetchMessages,
    fetchUser,
    deleteMessage,
    restoreMessage
}


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(MessagesList)