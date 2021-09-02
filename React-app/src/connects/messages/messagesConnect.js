import { connect } from "react-redux";
import { addBotMessageWithThunk, messagesSelectors } from "../../store/messages";

const mapStateToProps = (state, {chatId}) => ({ // state - аргумент, в котором мы будет получать объект состояния Redux
    messages: messagesSelectors.getMessage(state, chatId) // из него нужно выбрать те данные, которые хотим передать в наши компоненты, которые подписаны через connect
                                                            // для этого есть селекторы, которые занимаются выборкой данных
})

const mapDispatchToProps = (dispatch) => ({
    AddMessage: (chatId, message) => dispatch(addBotMessageWithThunk(chatId, message))
})

export const messagesConnect = connect(mapStateToProps, mapDispatchToProps);

// к коннектору подключаетмя форма создания сообщения, список сообщений и элемент списка сообщений