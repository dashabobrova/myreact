import { nanoid } from 'nanoid';

export const ADD_MESSAGE = 'ADD_MESSAGE';

/**
 * @param {object} message 
 * @param {string} message.id
 * @param {string} message.content
 * @param {string} message.chatId
 * @param {string} message.author
 */
export const createAddMessage = (message) => ({
    type: ADD_MESSAGE,
    payLoad: message
})


  //асинхронный action для бота
export const addBotMessageWithThunk = (chatId, message) => async (dispatch) => {
    const botName = 'bot';
        dispatch(createAddMessage(message));
            if (message.author !== botName) {
                const botMessage = {
                    chatId,
                    id: nanoid().toString(),
                    content: 'сообщение от бота',
                    author: botName
                };
                setTimeout(() => dispatch(createAddMessage(botMessage)), 2000);
            }
}
