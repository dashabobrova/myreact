import React, { useState } from "react";
import { useParams } from "react-router";
import { messagesApi } from "../../api/request/messages";

export const CreateMessageForm = () => {
  let {chatId} = useParams();

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


