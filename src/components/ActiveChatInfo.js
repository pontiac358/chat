import React from 'react';
import favorite from '../img/icons/favorite.svg'


const ActiveChatInfo = ({ user }) => {

    return (
        <div className="message-wrap__top">
            <div className="message-wrap__active-user">
                <div className="message-wrap__active-user-name">
                    { user.name }
                </div>
                <div className="message-wrap__active-user-status">
                    <i className='message-wrap__active-user-status-icon'>
                        <img src="/img/icons/online.svg" alt=""/>
                    </i>
                    <div className="message-wrap__active-user-status-hint">
                        В сети
                    </div>
                </div>
            </div>

            <div className="message-wrap__active-user-link">
                <a  href='' className='message-wrap__active-user-link-hint'>
                    Профиль ситтера
                </a>
                <a href="">
                    <button className='icon'>
                        <img src={ favorite } alt=""/>
                    </button>

                </a>
            </div>
        </div>
    )

}




export default ActiveChatInfo;