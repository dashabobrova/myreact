import { chatsApi } from "../../api/request/chats";

export const ADD_CHAT = 'ADD_CHAT';
export const ADD_CHATS = 'ADD_CHATS';

/* export const REMOVE_CHAT = 'REMOVE_CHAT' */

/* export const createRemoveChat = (chatId) => ({
    type: REMOVE_CHAT,
    payLoad: chatId
}) */

/** что будет находиться в объекте chat, который я буду передавать (структура данных)
 * @param {object} chat
 * @param {string} chat.id
 * @param {string} chat.title
 */
export const createAddChat = (chat) => ({
    type: ADD_CHAT,
    payLoad: chat // принимаем chat из аргументов ф-и
})

export const createAddChats = (chats) => ({
    type: ADD_CHATS,
    payLoad: chats // принимаем chat из аргументов ф-и
})

export const initChatsTracking = (dispatch) => {
    chatsApi.getList((chats) => {
        dispatch(createAddChats(chats))

    })
    chatsApi.getAdded((chat) => {
        dispatch(createAddChat(chat))
    })
}