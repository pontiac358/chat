import messages from '../data/messages'
import user from '../data/user'

export const fetchMessages = async () => {
    return new Promise(resolve => {
        resolve(messages)
    })
}

export const addMessage = async (mess) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let randomPercent = rand( 0, 3 )
            randomPercent === 2 ? reject(mess.id) : resolve(mess.id)

        }, 500)
    })

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

export const deleteMessage = async (id) => {
    return new Promise((resolve, reject) => {
        resolve(id)
    })
}

export const fetchUser = async () => {
    return new Promise(resolve => {
        resolve(user)
    })
}