import { db } from "../firebase";

export const messagesApi = {
    
    create: (newMessage, chatId) => {
        return db.ref('messages').child(chatId).push(newMessage)
            /* .then((ref) => ref.get())
            .then((snapshot) => ({
                id: snapshot.key,
                ...snapshot.val(),
            })) */
    },

    getList: (chatId, callback) => {
        db
            .ref(`messages`)
            .child(chatId)
            .on('value', (snapshot) => {
                const messages = []; // массив под сообщения

                // тут проходимся по списку сообщение и вытаскиваем каждое по очереди чтобы массив сделать
                snapshot.forEach(entry => {
                  messages.push(entry.val());
                });

                callback(messages)
               
            })
    }
}
