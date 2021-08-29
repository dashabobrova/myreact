
export const ADD_MESSAGE = 'ADD_MESSAGE';

/**
 * @param {object} message 
 * @param {string} message.id
 * @param {string} message.content
 * @param {string} message.chatId
 */
export const createAddMessage = (message) => ({
    type: ADD_MESSAGE,
    payLoad: message
})