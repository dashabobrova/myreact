const getChats = (state) => state.chats.chats || []; 
// Выборка данных, а именно из объекта в store (см. chats в combineReducers), достается массив chats (см. initialState в chatsReducer)
 /* 
        {
            chats: { // см. combineReducers в store
                chats: [] // см. chatsReducer
            } 
        }
 */

export const chatsSelectors = { // группировка селекторов в 1 объект
    getChats
}