export const ADD_CHAT = 'ADD_CHAT';

export const REMOVE_CHAT = 'REMOVE_CHAT'

/** что будет находиться в объекте chat, который я буду передавать (структура данных)
 * @param {object} chat
 * @param {string} chat.id
 * @param {string} chat.title
 */
export const createAddChat = (chat) => ({
    type: ADD_CHAT,
    payLoad: chat // принимаем chat из аргументов ф-и
})

export const createRemoveChat = (chatId) => ({
    type: REMOVE_CHAT,
    payLoad: chatId
})