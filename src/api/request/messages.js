import { db } from "../firebase";

export const messagesApi = {
    create: (content) => {
        return db.ref('messages').push({
            content
        })
            .then((ref) => ref.get())
            .then((snapshot) => ({
                id: snapshot.key,
                ...snapshot.val(),
            }))
    },
    getList: (callback) => {
        db
            .ref('messages')
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
    getAdded: (callback) => {
        db
            .ref('messages')
            .on('child_added', (snapshot) => callback({
                id: snapshot.key,
                ...snapshot.val(),
            }))
    }
}