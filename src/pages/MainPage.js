import React, { Component } from 'react';
import { connect } from "react-redux";
import Sidebar from '../components/Sidebar'
import MessagesList from '../containers/MessagesList'
import AddMessage from '../containers/AddMessage'
import ActiveChatInfo from '../components/ActiveChatInfo'


class MainPage extends Component{
    constructor(props) {
        super(props);

    }


    render() {
        const { activeChatUser } = this.props;

        return (
            <section className="content__center">
                <section className="massage-wrap">
                    <Sidebar />

                    <div className="message-wrap__content">
                        <ActiveChatInfo user={ activeChatUser } />
                        <MessagesList />
                        <AddMessage />
                    </div>

                </section>
            </section>

        )
    }
}





const mapStateToProps = (state) => (
    {
        activeChatUser: state.activeChatUser
    }
)


export default connect(mapStateToProps, null)(MainPage);