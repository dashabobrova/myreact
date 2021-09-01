import React from 'react';
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

// chatId, addMessages, messages - в коннекторе
/* добавляется Render, чтобы отметить, что это чистый компонент без хоков. 
Дальше Render передается в Connect и сохраняю в MessageList, который дальше будет использоваться в приложении */
export const CreateMessageFormRender = ({chatId, AddMessage}) => {
  const classes = useStyles();
  const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});

  // куда поместить эти 2 переменные const botName = 'bot';
  const userName = 'me';

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = {
      chatId,
      id: Date.now().toString(),
      content: getFieldValue('content'),
      author: userName
    }

    resetForm();
    AddMessage (chatId, message);
  }

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
  /*  getFieldValue - это функция, в качестве единственного аргумента она принимает имя свойства в объекте, и возвращает данные из этого поля. 
    В хуке useSimpleForm есть определение этой функции: const getFieldValue = (name) => values[name] || '';
    values - это стейт формы */
};

CreateMessageFormRender.propTypes  = {
  chatId: propTypes.string.isRequired,
}

export const CreateMessageForm = messagesConnect(CreateMessageFormRender);