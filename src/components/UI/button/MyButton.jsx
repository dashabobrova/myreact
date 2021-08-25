import React from "react";
import Button from '@material-ui/core/Button';

export const MyButton = ({children, ...props}) => {
    return (
    <Button {...props} 
        variant="contained" 
        color='primary' 
        >
        {children}
    </Button>
    )
}