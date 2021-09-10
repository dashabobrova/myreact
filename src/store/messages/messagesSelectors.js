
const getMessages = (state) => state.messages.messages || {};
/*  1 выборка данных, а именно из объекта в store (см. messages в combineReducers), 
    достается объект messages (см. initialState в messagesReducer + логика наполнения и структура);  */

const getMessage = (state, chatId) => getMessages(state)[chatId];
/*  2 выборка данных, а именно из найденного выше(getMessages) объекта messages достается массив по ключу chatId */

 /*        
        messages: {
            messages: {
    -------------------------------1 выборка данных(над чертой)----------------------------------------------------------
                chatId: [
                    {
                        chatId: '', id: '', content: '', author: ''
                    }
                ]
    -------------------------------2 выборка данных(над чертой)----------------------------------------------------------
            }
        } 
*/


export const messagesSelectors = {
    getMessages,
    getMessage
}