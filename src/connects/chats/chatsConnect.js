import { connect } from "react-redux"
import { chatsSelectors, createAddChat, createRemoveChat } from "../../store/chats"

const mapStateToProps = (state) => ({ // state - аргумент, в котором мы будет получать объект состояния Redux
    chats: chatsSelectors.getChats(state), // из него нужно выбрать те данные, которые хотим передать в наши компоненты, которые подписаны через connect
                                            // для этого есть селектор, который занимается выборкой данных
})

const mapDispatchToProps = (dispatch) => ({
    addChats(chat) { 
        return  dispatch(createAddChat(chat));
    },
    /*  Создание метода в объекте, который принимает чат, который дальше передается в createAddChat, 
        который вернет объект экшена и дальше этот объект перейдет в диспатч, который отправит экшн в редьюсеры, 
        которые выполнят вычисление и обновят состояние */

    removeChat(chatId) { 
        return  dispatch(createRemoveChat(chatId));
    }
})

export const chatsConnect = connect(mapStateToProps, mapDispatchToProps);

// в коннектору подключается форма создания чата, список чатов и жлемент списка чатов