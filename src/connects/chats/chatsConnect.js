import { connect } from "react-redux"
import { chatsSelectors} from "../../store/chats";

const mapStateToProps = (state) => ({ // state - аргумент, в котором мы будет получать объект состояния Redux
    chats: chatsSelectors.getChats(state), // из него нужно выбрать те данные, которые хотим передать в наши компоненты, которые подписаны через connect
                                            // для этого есть селектор, который занимается выборкой данных
})

export const chatsConnect = connect(mapStateToProps);

// в коннектору подключается форма создания чата, список чатов и жлемент списка чатов