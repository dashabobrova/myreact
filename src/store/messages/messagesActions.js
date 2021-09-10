import { messagesApi } from "../../api/request/messages";

export const ADD_MESSAGE = 'ADD_MESSAGE';

/**
 * @param {object} message 
 * @param {string} message.id
 * @param {string} message.content
 * @param {string} message.chatId
 * @param {string} message.author
 */
export const createAddMessage = (message, chatId) => ({
    type: ADD_MESSAGE,
    payLoad: {message, chatId}
})

// подписка на изменение сотояния в базе данных; вызывается в эффекте App.js
export const initMessagesTracking = () => (dispatch) => {
    messagesApi.getList((message, chatId) => {
        dispatch(createAddMessage(message, chatId))
    })
}