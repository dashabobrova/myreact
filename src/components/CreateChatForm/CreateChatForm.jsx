import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux";
import { createAddChat } from '../../store/chats/chatsActions.js'
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";
import { chatsApi } from "../../api/request/chats.js";
import { chatsSelectors } from "../../store/chats/chatsSelectors.js";

export const CreateChatForm = () => {
  const {push} = useHistory();
  const {chatId} = useParams();

  const [isUpdate] = useState(!!chatId);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const chat = useSelector(chatsSelectors.getChatById(chatId));

  useEffect(() => {
    if(chatId && chat) {
      setTitle(chat.title)
    } 
  }, [])

  const handleEmailChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (chatId) {
        await chatsApi.update(chatId, title)
      } else {
        await chatsApi.create(title)
      }
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
          <button type="submit">
            {
              isUpdate && <>update</>
            }
            {
              !isUpdate && <>create</>
            }
          </button>
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

