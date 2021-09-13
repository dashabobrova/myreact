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
                /* 

                {
                    {ключ},
                    {данные, которые приходят из Fb}
                } 
                  а надо только 

                   {данные, которые приходят из Fb} поместить под chatId
                
                */
                id: snapshot.key, // если убрать приходит {}
                ...snapshot.val(), // если убрать приходит {}
            }, 
                console.log(snapshot.key),
                console.log(snapshot.val()), // объект, пришедший из firebase

                //console.log(snapshot.child(`messages`).child(id).val()) // null
                
                ), 
                // `messages/${chatId}/${id}`
            )
    }
}
