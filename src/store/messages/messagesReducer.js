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
 * @param {string} action.payLoad.author
 */
export const messageReducer = (state = initialState, action) => {

    switch(action.type){
        // Добавление сообщения в конец
 /*        
        messages: {
            messages: {
                chatId: [
                    {
                        chatId: '', id: '', content: '', author: ''
                    }
                ]
            }
        } 
*/
        case ADD_MESSAGE: {
            const {chatId} = action.payLoad; // из payLoad достаю chatId; по нему сообщения привязываются к чату

            // проверка: есть ли в списке чат по этому id?
            if(state.messages.hasOwnProperty(chatId)) { // ДА (т.е. уже добавляли в этой чат сообщения)
                    // hasOwnProperty - метод проверяет, есть ли в объекте свойство
                state.messages[chatId] = [
                    ...state.messages[chatId], // копия чата
                    action.payLoad, // добавляем в чат новый элемент списка(сообщение)
                ]
            } else { // НЕТ (первый раз добавляем сообщение в чат)
                state.messages[chatId] = [action.payLoad] // помещаем payLoad в массив и присваиваем по ключу chatId
            }

            return {
                messages: {
                    ...state.messages // копия всего списка сообщений чата, включая новое состояние; заменяем старое значение созданной копией
                }
            }
        }

        default: {
            return state
        }
    }
}