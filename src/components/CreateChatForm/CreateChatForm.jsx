import React from "react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'grey',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 0px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: theme.spacing(1),
    width: '5ch',
  },
}));

export const CreateChatForm = ({value, onSubmit, onChange}) => {
  const classes = useStyles();
  
  return (
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
        classes={{root: classes.root}}
        variant="contained"
        color="primary"
        className={classes.button}
        size="small"
        type="submit" 
      >Add +</Button>
    </form>
  )
}

