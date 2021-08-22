import React from "react";

export const ChatButton = ({children, ...props}) => {
    return (
    <button {...props} >
        {children}
    </button>
    )
}