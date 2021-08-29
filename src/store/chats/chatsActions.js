

export const ADD_CHAT = 'ADD_CHAT';

export const REMOVE_CHAT = 'REMOVE_CHAT'

/**
 * @param {object} chat
 * @param {string} chat.id
 * @param {string} chat.title
 */
export const createAddChat = (chat) => ({
    type: ADD_CHAT,
    payLoad: chat
})

export const createRemoveChat = (chatId) => ({
    type: REMOVE_CHAT,
    payLoad: chatId
})