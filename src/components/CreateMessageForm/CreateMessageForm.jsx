import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { messagesConnect } from '../../connects/messages/messagesConnect';
import { useSimpleForm } from '../../hooks/useSimpleForm/useSimpleForm';
import { usePrevState } from '../../hooks/usePrevState/usePrevState';


export const CreateMessageFormRender = ({chatId, addMessages, messages}) => {

  const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});

  const userName = 'me';
  const botName = 'bot';

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = {
      chatId,
      id: Date.now().toString(),
      content: getFieldValue('content'),
      author: userName
    }

    addMessages(message);

    resetForm();
  }

  const findMessageIndexById = (list, messageId) => {
    return list.findIndex(({id}) => id === messageId)
  }

  const messageIndex = findMessageIndexById(messages.chatId, id) // найти индекс сообщения в массиве по ключу chatId, по id
// messages.chatId - массив сообщений по ключу
// id сообщения

  // логика добавления сообщения бота
  // сейчас выводится бесконечное кол-во сообщений от бота т.к. нет проверки, кто  автор предыдущего сообщения
  useEffect(() => {
      if(messages) { // если объект с сообщениями есть (чтобы не отправлялось первое сообщение от бота)
        if(messages.chatId[messageIndex - 1].author === userName){ // если автор предыдущего сообщения - user
          const message = {
            chatId,
            id: Date.now().toString(),
            content: 'сообщение от бота',
            author: botName
          }

          addMessages(message); 
          console.log('bot message')
        }
    }
  }, [messages]) 

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <input
        name='content'
        value={getFieldValue('content')}
        onChange={(event) => {
          setFieldValue('content', event.target.value);
        }}
        label="Content" />
      <button type="submit">Save</button>
    </form>
  );
};

CreateMessageFormRender.propTypes  = {
  chatId: propTypes.string.isRequired,
}

export const CreateMessageForm = messagesConnect(CreateMessageFormRender);