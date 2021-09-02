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

// addChats - в коннекторе
/* добавляется Render, чтобы отметить, что это чистый компонент без хоков. 
Дальше Render передается в Connect и сохраняю в ChatList, который дальше будет использоваться в приложении */

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
/*  getFieldValue - это функция, в качестве единственного аргумента она принимает имя свойства в объекте, и возвращает данные из этого поля. 
    В хуке useSimpleForm есть определение этой функции: const getFieldValue = (name) => values[name] || '';
    values - это стейт формы */
}

