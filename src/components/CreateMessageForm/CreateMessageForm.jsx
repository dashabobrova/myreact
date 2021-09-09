import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { nanoid } from 'nanoid';
import { createAddMessage } from "../../store/messages";
import { useParams } from "react-router";

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

export const CreateMessageForm = () => {
  let {chatId} = useParams();
  const classes = useStyles();
  const dispatch = useDispatch()
  const [value, setValue] = useState({ text: '' });

  const userName = 'me';

  const onSubmit = (e) => {
      e.preventDefault();
      const newMessage = {
          chatId,
          id: nanoid().toString(),
          content: value.text,
          author: userName
      }

      dispatch(createAddMessage(newMessage))
      setValue({ text: '' })
  };

  const onChange = (e) => {
      setValue({ ...value, text: e.target.value });
  }
  return (
    <form onSubmit={onSubmit}  noValidate autoComplete="off">
      <TextField
        style = {{width: 400}}
        inputRef={input => input && input.focus()} // автофокус при изменении стейта сообщений и при загрузке страницы
        name='content'
        value={value.text}
        onChange={onChange}
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


