import { messagesApi } from "../../api/request/messages";

export const ADD_MESSAGE = 'ADD_MESSAGE';

/**
 * @param {object} message 
 * @param {string} message.id
 * @param {string} message.content
 * @param {string} message.chatId
 * @param {string} message.author
 */
export const createAddMessage = (message) => ({
    type: ADD_MESSAGE,
    payLoad: message
})

// подписка на изменение сотояния в базе данных; вызывается в эффекте App.js
export const initMessagesTracking = (dispatch) => {
    messagesApi.getList((message) => {
        dispatch(createAddMessage(message))
    })
}

