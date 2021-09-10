import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Icon from '@material-ui/core/Icon';
import { nanoid } from 'nanoid';
import { createAddMessage } from "../../store/messages";
import { useParams } from "react-router";

export const CreateMessageForm = () => {
  let {chatId} = useParams();
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
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        size="small"
      >Send</Button>
    </form>
  );
};


