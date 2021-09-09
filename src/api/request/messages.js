import { db } from "../firebase";
// тут все ок
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
            .on('value', (snapshot) => {
                const messages = []
                snapshot.forEach((snap) => {
                    messages.push({
                        id: snap.key,
                        ...snap.val(),
                    })
                })
                callback(messages)
        })
    },
    getAdded: (callback, chatId) => {
        db
            .ref('messages').child(chatId)
            .on('child_added', (snapshot) => callback({
                id: snapshot.key,
                ...snapshot.val(),
            }))
    }
}