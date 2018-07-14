import React, { Component } from 'react'
import * as R from 'ramda'
import ContentEditable from 'react-contenteditable'
import {connect} from "react-redux";
import {addMessage} from "../actions";

class AddMessage extends Component {
	constructor(props){
		super(props)

		this.state = {
			input: ''
		}
	}

	handleChange (event) {
        let text = event.target.value

        this.setState({
            input: text
        })
    }



	render(){
		const { addMessage } = this.props;
        const handleAddMessage = () => {
            let message = {
                id:   Date.now(),
                date: Date.now(),
                text: this.state.input,
                user: this.props.user,
                type: 'message',
            }

            this.state.input && addMessage(message);

            this.setState({
                input: ''
            })

            setTimeout(()=>{
                let objDiv = document.getElementById("messageList")
                objDiv.scrollTop = objDiv.scrollHeight;

            })
        }

        const submitTrigger = event => {
            let charCode = (event.which) ? event.which : event.keyCode;

            if(charCode == 13 && !event.shiftKey) {
                event.preventDefault();

                handleAddMessage()
            }
        }

        return (
            <div className="add-message">
                <div className="add-message__input-wrap">
                    <ContentEditable
                        className="add-message__input"
                        contentEditable='true'
                        placeholder="Сообщение"
                        onChange={ e => this.handleChange(e) }
                        type="text"
                        onKeyPress={ e => submitTrigger(e) }
                        html={this.state.input}
                    ></ContentEditable>
                </div>

                <div className="add-message__btn-wrap">
                    <button onClick={handleAddMessage} className='add-message__btn btn'>Отправить</button>
                </div>
            </div>
        )
	}

}



const mapStateToProps = (state, ownProps) => {
    return{
        user: state.user,
        ownProps
    }
}

const mapDispatchToProps = {
    addMessage,
}


export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);