import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { useParams } from "react-router";
import { messagesApi } from "../../api/request/messages";

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
  const classes = useStyles();
  const {chatId} = useParams();
  
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newMessage = {
      message: content,
      author: 'me',
      chatId,
    }
    
    try {
      await messagesApi.create(newMessage, chatId)
    } catch (e){
      setError(e);
    }
    setContent('');
    
  };
  return (
      <form onSubmit={handleSubmit}>
          <TextField
            style = {{width: 400}}
            inputRef={input => input && input.focus()} // автофокус при изменении стейта сообщений и при загрузке страницы
            placeholder="title"
            name="title"
            type="title"
            onChange={handleEmailChange}
            value={content}
          />

          {error && <p>{error.toString()}</p>}
          <Button 
            classes={{root: classes.root}}
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            size="small"
            type="submit"
            >submit</Button>
      </form>
  );
};


