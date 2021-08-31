import React from "react";
import ListItem from '@material-ui/core/ListItem';
import {shape, string, number} from 'prop-types';
import { Link } from 'react-router-dom';

export const ChatItem = (props) => {
    return (
        <>
        <Link to={`/chatpage/${props.chat.id}`} >
           <ListItem>{props.chat.name}</ListItem>
        </Link>
         <button onClick={() => props.remove(props.chat)}>Удалить чат</button>
         </>
    )
}

ChatItem.propTypes = {
    chat: shape ({
        id: number.isRequired,
        name: string.isRequired,
    }).isRequired,
}