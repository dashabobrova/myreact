import React from "react";
import { chatsConnect } from "../../connects/chats/chatsConnect";
import { useSimpleForm } from "../../hooks/useSimpleForm/useSimpleForm";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'grey',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 0px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: theme.spacing(1),
    width: '5ch',
  },
}));

export const CreateChatFormRender = ({addChats}) => {
  const classes = useStyles();
  const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});
  // useSimpleForm - кастомный хук с логикой работы формы

  const handleSubmit = (event) => {
    event.preventDefault();
    const chat = {
      id: Date.now().toString(),
      title: getFieldValue('title')
    };
    addChats(chat); // сформировала объект, передала в addChats
    resetForm();
  }

  return (
    // что-то не то с формой (у препода форма свернута в редакторе + использует материал юай - взять из репозитория материалстили и форму)
    // СМ, РЕПОЗИТОРИЙ
    // в стейт добавляется, но без названия ( т.е. данные то уходят = связка сработала )

<form onSubmit={handleSubmit} noValidate autoComplete="off">
  <TextField
    style = {{width: 200}}
    id="filled-secondary"
    name='title'
    value={getFieldValue('title')}
    onChange={(event) => {
      setFieldValue('title', event.target.value);
    }}
    label="Chat" />
  <Button 
    classes={{root: classes.root}}
    variant="contained"
    color="primary"
    className={classes.button}
    size="small"
    type="submit"
  >Add +</Button>
</form>
  )
}

export const CreateChatForm = chatsConnect(CreateChatFormRender);
