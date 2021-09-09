import React, { useState } from "react";
import { useHistory } from "react-router";
import { chatsApi } from "../../api/request/chats.js";

export const CreateChatForm = () => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="title"
            name="title"
            type="title"
            onChange={handleEmailChange}
            value={title}
          />
        </div>
        <div>
          {error && <p>{error.toString()}</p>}
          <button type="submit">submit</button>
        </div>
      </form>
    </div>

/* 
    <form onSubmit={onSubmit} noValidate autoComplete="off">
      <TextField
        style = {{width: 200}}
        id="filled-secondary" //свойство material-ui
        name='title'
        value={value.text}
        onChange={onChange}
        label="Chat" 
      />

      <Button 
        variant="contained"
        color="primary"
        size="small"
        type="submit" 
      >Add +</Button>
    </form> */
  )
}

