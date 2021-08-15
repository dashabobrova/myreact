import React from "react";
import { MyInput } from "../UI/input/MyInput";
import { MyButton } from '../UI/button/MyButton';

export const MessageForm = (props) => {
    return (
    <div>
       <form>
        <MyInput 
          value={props.text}
          onChange={e => props.setText(e.target.value)}
          type='text' 
          placeholder='Сообщение'
        />
        <MyButton onClick={props.onSubmit}>Send</MyButton>
      </form>
    </div>
    )
}