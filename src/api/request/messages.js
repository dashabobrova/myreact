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

    getList: (callback) => {
        db
            .ref(`messages`)
            .on('value', (snapshot) => callback({
                id: snapshot.key,
                ...snapshot.val(),
            }, 
            
                console.log(snapshot.key),
                console.log(snapshot.val()), // объект, пришедший из firebase
                console.log(snapshot.child(`messages`).val()) // null
                
                ), 
                // `messages/${chatId}/${id}`
            )
    }
}
