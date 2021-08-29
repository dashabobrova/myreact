import { ADD_MESSAGE } from "./messagesActions"

const initialState = {
    messages: {}
}

/**
 * @param {object} state
 * @param {object} state.messages
 * 
 * @param {object} action
 * @param {string} action.type
 * @param {object} action.payLoad
 * @param {string} action.payLoad.id
 * @param {string} action.payLoad.chatId
 * @param {string} action.payLoad.content
 */
export const messageReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_MESSAGE: {
            const {chatId} = action.payLoad;
            if(state.messages.hasOwnProperty(chatId)) {
                state.messages[chatId] = [
                    ...state.messages[chatId],
                    action.payLoad,
                ]
            } else {
                state.messages[chatId] = [action.payLoad]
            }

            return {
                messages: {
                    ...state.messages
                }
            }
        }

        default: {
            return state
        }
    }
}