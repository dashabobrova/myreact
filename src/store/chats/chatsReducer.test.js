import { createAddChat } from './chatsActions'
import { initialState, chatsReducer } from './chatsReducer'

describe('chatsReducer', () => {
  it('вызов редьюсера без экшена вернет initialState', () => { // нужно брать initialState из редьюсера !
    const result = chatsReducer();
    expect(result).toEqual(initialState);
  })

  it('чат добавляется в конец списка', () => {

    const result = chatsReducer(undefined, createAddChat({
      title: `chat-1`,
    }));

    expect(result).toEqual({
      chats: [
        {
          title: 'chat-1',
        }
      ]
    })
  });
  
})
