import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { messagesConnect } from '../../connects/messages/messagesConnect';
import { useSimpleForm } from '../../hooks/useSimpleForm/useSimpleForm';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: theme.spacing(1),
    width: '10',
  },


}));

export const CreateMessageFormRender = ({chatId, addMessages, messages}) => {
  const classes = useStyles();
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

  // логика добавления сообщения бота
  useEffect(() => {
      if(messages) { // если объект с сообщениями есть (чтобы не отправлялось первое сообщение от бота)
        if(messages[messages.length-1].author === userName){ // если автор предыдущего сообщения - user, то добавляю сообщение бота
          const message = {
            chatId,
            id: Date.now().toString(),
            content: 'сообщение от бота',
            author: botName
          }
          setTimeout(() =>addMessages(message), 1000)
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]) 

  return (
    <form onSubmit={handleSubmit}  noValidate autoComplete="off">
      <TextField
        style = {{width: 400}}
        inputRef={input => input && input.focus()} // автофокус при изменении стейта сообщений и при загрузке страницы
        name='content'
        value={getFieldValue('content')}
        onChange={(event) => {
          setFieldValue('content', event.target.value);
        }}
        label="Message" />

      <Button
        classes={{root: classes.root}}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        size="small"
      >Send</Button>
    </form>
  );
};

CreateMessageFormRender.propTypes  = {
  chatId: propTypes.string.isRequired,
}

export const CreateMessageForm = messagesConnect(CreateMessageFormRender);