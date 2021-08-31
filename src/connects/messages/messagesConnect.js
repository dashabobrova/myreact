import { connect } from "react-redux";
import { createAddMessage, messagesSelectors } from "../../store/messages";

const mapStateToProps = (state, {chatId}) => ({ // state - аргумент, в котором мы будет получать объект состояния Redux
    messages: messagesSelectors.getMessage(state, chatId) // из него нужно выбрать те данные, которые хотим передать в наши компоненты, которые подписаны через connect
                                                            // для этого есть селекторы, которые занимаются выборкой данных
})

const mapDispatchToProps = (dispatch) => ({
    addMessages: (message) => dispatch(createAddMessage(message))
    /*  Создание метода в объекте, который принимает сообщение, который дальше передается в createAddMessage, 
        который вернет объект экшена и дальше этот объект перейдет в диспатч, который отправит экшн в редьюсеры, 
        которые выполнят вычисление и обновят состояние */

    /* ТО ЖЕ САМОЕ: 
        addMessages(message) { 
            return  dispatch(createAddMessage(message));
        } 
    */
})

export const messagesConnect = connect(mapStateToProps, mapDispatchToProps);

// к коннектору подключаетмя форма создания сообщения, список сообщений и элемент списка сообщений