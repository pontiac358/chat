import React from 'react'
import dateFormat from 'dateformat'


const Message = ({id, text, user, status, date, nextMessUser = {},prevMessUser = {}, type, myMessage, onDelete, onRestore}) => {
    let renderMessage = '';
    let renderStatus = status === 'succsess' ? (
        <img src="/img/icons/online.svg" alt=""/>
    ):(
        <img src="/img/icons/offline.svg" alt=""/>
    )
    let myMesStatusRender = ''




    switch (type){
        case 'notific' :
            renderMessage = (
                <div className="message__wrap message__wrap_notific">
                    <div className="message__notific-status">
                        { renderStatus }
                    </div>
                    <div className='message__notific-text'>
                        <div className='text_center'>{ text }</div>

                    </div>
                    <div className="message__time">{ dateFormat(date, 'HH:MM') }</div>
                </div>
            )
            break;
        case 'message':
            if(myMessage){
                switch (status){
                    case 'succsess' :
                        myMesStatusRender = (
                            <div className="message__status">
                                <img src="/img/icons/succsess.svg" alt=""/>
                            </div>
                        )
                        break
                    case 'sending' :
                        myMesStatusRender = (
                            <div className="message__status">
                                <div className="message__status--sending">
                                    Отправляется…

                                </div>
                            </div>
                        )
                        break
                    case 'failure' :
                        myMesStatusRender = (
                            <div className="message__status--failure">
                                <div className="message__status-nav">
                                    <button onClick={ onRestore } className='message__status-btn'><img src="/img/icons/restart.svg" alt=""/></button>
                                    <button onClick={() => onDelete(id)} className='message__status-btn'><img src="/img/icons/delete.svg" alt=""/></button>
                                </div>

                                <div className="message__status-failure-hint">
                                    Не отправлено
                                </div>

                            </div>
                        )
                        break
                }


                renderMessage = (
                    <div className={`
                            message__wrap
                            message__wrap_my-mess
                            ${user.id === nextMessUser.id && 'message__wrap_bottom-my-mess'}
                            ${user.id === prevMessUser.id && 'message__wrap_top-my-mess'}
                            `
                    }>
                        { myMesStatusRender }
                        <div className="message__time">{ dateFormat(date, 'HH:MM') }</div>
                        <div className='message__text' dangerouslySetInnerHTML={{ __html: text }}>
                        </div>
                    </div>
                )
            }else{
                renderMessage = (
                    <div data-prev={nextMessUser.id} data-next={nextMessUser.id} className={`
                            message__wrap
                            ${user.id === nextMessUser.id && 'message__wrap_bottom-my-mess'}
                            ${user.id === prevMessUser.id && 'message__wrap_top-my-mess'}
                            `
                    }>
                        {(!nextMessUser || user.id !== nextMessUser.id) && (
                            <div className='message__user-photo'><img src={user.photo} alt=""/> </div>
                        )}
                        <div className='message__text' dangerouslySetInnerHTML={{ __html: text }}>
                        </div>
                        <div className="message__time">{ dateFormat(date, 'HH:MM') }</div>
                    </div>
                )
            }

            break;

        default:
            renderMessage = (
                <div>{ text }</div>
            )
    }


	return (
        <div className='message'>

            {renderMessage}
        </div>
    )
}



export default Message