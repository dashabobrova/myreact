import { ADD_CHAT/* , REMOVE_CHAT */ } from "./chatsActions"

const initialState = {
    chats: []
}

// функция фильтрации по id (ПЕРЕИСПОЛЬЗОВАТЬ);  например: state.chats.filter(filterById(action.payLoad)),
/* РАБОТАЕТ ТАК: сначала вызов '(targetId) =>' (функция вернет другую функцию ('({id}) => targetId !== id') и при помощи замыкания (targetId) сохранит ссылку на targetId) 
и дальше в фильтре на каждый элемент будет вызываться '({id}) => targetId !== id'*/
/* const filterById = (targetId) => ({id}) => targetId !== id; */

export const chatsReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_CHAT: {
            return {
                chats: [
                    ...state.chats, // копия старого списка
                    action.payLoad, // добавление нового чата в список
                ],
            }
        }

/*         case REMOVE_CHAT: {
            return {
                chats: state.chats.filter(filterById(action.payLoad)),
            }
        } */

        default: {
            return state
        }
    }
}