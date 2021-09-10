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
        debugger;
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
        debugger;
        db
            .ref('messages').child(chatId)
            .on('child_added', (snapshot) => callback({
                id: snapshot.key,
                ...snapshot.val(),
            }))
    }
 /*    getList: (callback, chatId) => db.ref('messages').child(chatId).on('child_changed', (snapshot) => callback({
            id: snapshot.key,
            ...snapshot.val(),
    })) */
}

/* 
    var db = {
        messages: {
            [chatid] : {
                [messageId]: {},
                [messageId]: {},
                [messageId]: {},
                [messageId]: {},
            }
        }
    } 
---------------------------------------------------------------------------------
    db.ref('messages') -> колекция db.messages,
    db.ref('messages').child(chatId) -> коллекция db.messages[chatId]
*/