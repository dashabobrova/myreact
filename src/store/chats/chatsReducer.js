import { ADD_CHAT, ADD_CHATS/* , REMOVE_CHAT */ } from "./chatsActions"

export const initialState = {
    chats: []
}

export const chatsReducer = (state = initialState, action) => {
    switch(action?.type) {

        case ADD_CHAT: {
            return {
                chats: [
                    ...state.chats, // копия старого списка
                    action.payLoad, // добавление нового чата в список
                ],
            }
        }

        case ADD_CHATS: {
            return {
                chats: action.payLoad
            }
        }

        default: {
            return state;
        }
    }
}