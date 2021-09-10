import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import { messagesApi } from "../../api/request/messages";
import { messagesSelectors } from "../../store/messages";

export const CreateMessageForm = () => {
  let {chatId} = useParams();
  const {push} = useHistory();

  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setContent('');

    try {
      await messagesApi.create(content, chatId)
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
            value={content}
          />
        </div>
        <div>
          {error && <p>{error.toString()}</p>}
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};


