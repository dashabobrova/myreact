import { db } from "../firebase";

export const messagesApi = {
    
    create: (content, chatId) => {
        return db.ref('messages').child(chatId).push(content)
            .then((ref) => ref.get())
            .then((snapshot) => ({
                id: snapshot.key,
                ...snapshot.val(),
            }))
    },

    getList: (callback, chatId) => {
        db
            .ref('messages').child(chatId)
            .on('child_changed', (snapshot) => callback({
                id: snapshot.key,
                ...snapshot.val(),
            }))
        
        db
            .ref('messages').child(chatId)
            .on('child_added', (snapshot) => callback({
                id: snapshot.key,
                ...snapshot.val(),
            }))
    }
}
