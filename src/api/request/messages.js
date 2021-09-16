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
                  messages.push({
                    _key: entry.key,
                    ...entry.val()
                  });
                  // const id = entry.key;
                  // console.log(entry.key)
                });

                
                callback(messages)
               
            })
    }
}

/* 
РАБОТА getList:

первый объект snapshot если на нем просто вызвать метод val() вернет объект [key]:{} 
но нам нужна иная структура, поэтому мы с помощью forEach итерируем объект, 
но тк SDK firebase не предоставляет доступ к данным напрямую, а делает это с помощью типа snapshot 
то и итератор будет возвращать snapshot на котором мы вызываем метод val() и получаем объект сообщения, 
а затем кладем его в массив. 
Если нам при этом важно получить id сообщения то достаточно обратится к полю key на этом объекте snapshot
 */