import React from "react";
import ListItem from '@material-ui/core/ListItem';
import {number, shape, string} from 'prop-types';

export const ChatItem = (props) => {
    return (
        <ListItem>{props.chat.name}</ListItem>
    )
}

ChatItem.propTypes = {
    chat: shape ({
        id: number.isRequired,
        name: string.isRequired,
    }).isRequired,
}