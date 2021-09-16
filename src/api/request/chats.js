import { db } from "../firebase";

export const chatsApi = {
    create: (title) => {
        return db.ref('chats').push({
            title
        })
            .then((ref) => ref.get())
            .then((snapshot) => ({
                id: snapshot.key,
                ...snapshot.val(),
            }))
    },
    /* update: (id, title) => {
        return db.ref('chats').child(id).set({
            title
        })
    }, */
    delete: (id) => db.ref('chats').child(id).remove(),
    getList: (callback) => {
        db
            .ref('chats')
            .on('value', (snapshot) => {
                const posts = []
                snapshot.forEach((snap) => {
                    posts.push({
                        id: snap.key,
                        ...snap.val(),
                    })
                })
                callback(posts)
        })
    },
    getAdded: (callback) => {
        db
            .ref('chats')
            .on('child_added', (snapshot) => callback({
                id: snapshot.key,
                ...snapshot.val(),
            }))
    }
}