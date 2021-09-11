/* import { connect } from "react-redux";
import { messagesSelectors } from "../../store/messages";

const mapStateToProps = (state, {chatId}) => ({ // state - аргумент, в котором мы будет получать объект состояния Redux
    messages: messagesSelectors.getMessage(state, chatId) // из него нужно выбрать те данные, которые хотим передать в наши компоненты, которые подписаны через connect
                                                            // для этого есть селекторы, которые занимаются выборкой данных
})

export const messagesConnect = connect(mapStateToProps);
 */


// к коннектору подключаетмя форма создания сообщения, список сообщений и элемент списка сообщений