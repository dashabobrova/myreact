import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { chatsApi } from "../../api/request/chats.js";

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

export const CreateChatForm = () => {
  const classes = useStyles();
  const {push} = useHistory();

  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitle('');

    try {
      await chatsApi.create(title)
      push('/chatpage')
    } catch (e){
      setError(e);
    }

  };
  
  return (
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            style = {{width: 200}}
            id="filled-secondary" //свойство material-ui
            label="Chat" 
            placeholder="title"
            name="title"
            type="title"
            onChange={handleEmailChange}
            value={title}
          />
          {error && <p>{error.toString()}</p>}
          <Button 
            type="submit"
            classes={{root: classes.root}}
            variant="contained"
            color="primary"
            className={classes.button}
            size="small"
            >submit</Button>
      </form>
  )
}

