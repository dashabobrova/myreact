import { db } from "../firebase";

export const chatsApi = {
    create: (title) => {
        return db.ref('chats').push({
            title
        })
            .then((ref) => ref.get())
            .then((snap) => ({
                id: snap.key,
                ...snap.val(),
            }))
    },
    update: (id, title) => {
        return db.ref('chats').child(id).set({
            title
        })
    },
    delete: (id) => db.ref('chats').child(id).remove(),
    getList: (callback) => db
        .ref('chats')
        .on('child_changed', (snapshot) => callback({
            id: snapshot.key,
            ...snapshot.val(),
        })),
}