import React from "react";
import ListItem from '@material-ui/core/ListItem';
import {shape, string, number} from 'prop-types';

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