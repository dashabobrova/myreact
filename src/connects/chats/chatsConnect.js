import { connect } from "react-redux"
import { chatsSelectors, createAddChat, createRemoveChat } from "../../store/chats"

const mapStateToProps = (state) => ({
    chats: chatsSelectors.getChats(state), // селектор занимается выборкой данных
})

const mapDispatchToProps = (dispatch) => ({
    addChats(chat) { 
        /* создание метода в объекте, который принимает чат, который дальше передается в createAddChat, 
        который вернет объект экшена и дальше этот объект перейдет в диспатч, который отправит экшн в редьюсеры, 
        которые выполнят вычисление и верну новое значение */
        return  dispatch(createAddChat(chat));
    },

    removeChat(chatId) { 
        return  dispatch(createRemoveChat(chatId));
    }
})

export const chatsConnect = connect(mapStateToProps, mapDispatchToProps);