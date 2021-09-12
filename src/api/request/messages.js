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

    getList: (callback, chatId) => {
        db
            .ref(`messages`)
            .on('value', (snapshot) => callback({
                id: snapshot.key,
                ...snapshot.val(),
            }, console.log(snapshot.key),
            console.log(snapshot.val()),), 
            // поможить newMessage в callback ?    
)
    }
}
